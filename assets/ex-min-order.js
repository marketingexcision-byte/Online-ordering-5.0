;(() => {
  const MIN_CENTS = 20000; // $200.00

  const $ = (s, r=document) => r.querySelector(s);

  function formatMoney(cents){
    try { if (Shopify && Shopify.formatMoney) {
      return Shopify.formatMoney(cents, "{{ shop.money_format | escape }}");
    }} catch(e){}
    return new Intl.NumberFormat('en-AU',{style:'currency',currency:'AUD'}).format((cents||0)/100);
  }

  function clamp(n, lo=0, hi=100){ return Math.max(lo, Math.min(hi, n)); }

// Prefer PRE-DISCOUNT subtotal (ignore discount codes)
async function readCartTotalCents(){
  // 1) If the page already exposes the original subtotal, use that
  const parseMoneyTextToCents = (el) => {
    if (!el) return NaN;
    const num = el.textContent.replace(/[^0-9.,-]/g,'').replace(/,/g,'');
    const f = parseFloat(num);
    return isNaN(f) ? NaN : Math.round(f * 100);
  };

  // On your cart template: 
  //  - .wcp-original-cart-total = original subtotal (pre-discount)
  //  - .wcp-cart-total          = discounted total (we must NOT use this)
  const originalEl = document.querySelector('.wcp-original-cart-total');
  const originalFromDom = parseMoneyTextToCents(originalEl);
  if (!isNaN(originalFromDom) && originalFromDom > 0) return originalFromDom;

  // 2) Fall back to Shopify Ajax Cart
  const r = await fetch('/cart.js', {credentials:'same-origin'});
  if (!r.ok) return 0;
  const data = await r.json();

  // Prefer items_subtotal_price (pre cart-level discounts)
  if (typeof data.items_subtotal_price === 'number' && data.items_subtotal_price > 0) {
    return data.items_subtotal_price;
  }

  // Otherwise, sum original_line_price across items
  if (Array.isArray(data.items) && data.items.length) {
    const sum = data.items.reduce((acc, it) => {
      const cents = (typeof it.original_line_price === 'number' && it.original_line_price > 0)
        ? it.original_line_price
        : (typeof it.line_price === 'number' ? it.line_price : 0);
      return acc + cents;
    }, 0);
    if (sum > 0) return sum;
  }

  // Absolute last resort: total_price (may include discounts)
  return data?.total_price || 0;
}


  function paint(root, subtotalCents){
    if (!root) return;

    // If override flag is present, do not touch the text or bar. just unlock checkout
    const override = root.dataset.override === '1';
    const btn = document.querySelector('.cart-summary button[name="checkout"], .btn.checkout, #ex-checkout');

    if (override) {
      if (btn) {
        btn.disabled = false;
        btn.setAttribute('aria-disabled', 'false');
        btn.removeAttribute('title');
      }
      return;
    }

    const min = Number(root.dataset.min || MIN_CENTS);
    const now = Math.max(0, subtotalCents | 0);
    const remaining = Math.max(0, min - now);
    const pct = clamp((now / min) * 100);

    const active = root.querySelector('.ex-min-order__active');
    const rest   = root.querySelector('.ex-min-order__rest');
    const remEl  = root.querySelector('[data-remaining]');
    const note   = root.querySelector('[data-note]');
    const bar    = root.querySelector('.ex-min-order__bar');

    if (active && rest) {
      active.style.flexBasis = pct + '%';
      rest.style.flexBasis   = (100 - pct) + '%';
    }
    if (bar){
      bar.setAttribute('aria-valuemin', '0');
      bar.setAttribute('aria-valuemax', String(min));
      bar.setAttribute('aria-valuenow', String(now));
    }
    if (remEl) remEl.textContent = formatMoney(remaining);

    root.classList.toggle('ex-min-order--ok', remaining === 0);
    if (note) {
      note.textContent = (remaining === 0)
        ? 'You’ve reached the $200 minimum. you can checkout.'
        : `Add ${formatMoney(remaining)} more to enable checkout.`;
    }

    // Cart checkout button lock in non override mode
    if (btn){
      btn.disabled = remaining > 0;
      btn.setAttribute('aria-disabled', remaining > 0 ? 'true' : 'false');
      if (remaining > 0) btn.title = `Add ${formatMoney(remaining)} more to checkout`;
      else btn.removeAttribute('title');
    }
  }


  function paintBoth(cents){
    paint(document.getElementById('ex-min-order-cart'), cents);
    paint(document.getElementById('ex-min-order-pdp'), cents);
  }

  // ← ASYNC again (returns a Promise)
  async function refresh(){
    const cents = await readCartTotalCents();
    paintBoth(cents);
  }

  // Public API (Promise-returning)
  window.exMinOrder = { refresh, paintWithCents: paintBoth };

  document.addEventListener('DOMContentLoaded', () => {
    // initial draw
    refresh();

    // Re-run when cart is edited
    document.addEventListener('change', (e) => {
      if (e.target.matches('.cart-form input[name="updates[]"], .cart-form input[type="number"]')) {
        setTimeout(refresh, 600);
      }
    });
    document.addEventListener('submit', (e) => {
      if (e.target.closest('form.cart-form')) setTimeout(refresh, 800);
    });

    // Watch WCP total changes
    const w = document.querySelector('.wcp-cart-total');
    if (w && 'MutationObserver' in window){
      new MutationObserver(() => refresh()).observe(w, {subtree:true, childList:true, characterData:true});
    }
  });
})();