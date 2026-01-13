(function () {
  const KEY = 'gst_mode'; // 'inc' | 'ex'

  function getInitialMode() {
    const saved = localStorage.getItem(KEY);
    if (saved === 'inc' || saved === 'ex') return saved;
    const first = document.querySelector('.js-gst-price');
    return (first && first.dataset.defaultInc === 'true') ? 'inc' : 'ex';
  }

function applyMode(mode) {
  // flip price text
  document.querySelectorAll('.js-gst-price').forEach(n => {
    const taxable = n.dataset.taxable === 'true';
    const ex = n.dataset.moneyEx;
    const inc = n.dataset.moneyInc;
    n.textContent = taxable ? (mode === 'inc' ? inc : ex) : ex;
  });

  // flip bubble text
  document.querySelectorAll('.ex-gst-bubble').forEach(b => {
    const taxable = (b.dataset.taxable !== 'false');
    b.textContent = (mode === 'inc') ? 'INC GST' : 'EX GST';
    b.style.display = taxable ? '' : 'none';
  });

  // keep UI widgets in sync
  const sel = document.getElementById('gstToggle');
  if (sel) sel.value = mode;
  const chk = document.getElementById('gstToggleSwitch');
  if (chk) chk.checked = (mode === 'inc');
}


  function setMode(mode) {
    localStorage.setItem(KEY, mode);
    applyMode(mode);
  }

  function bindControls() {
    const sel = document.getElementById('gstToggle');
    if (sel) sel.addEventListener('change', () => setMode(sel.value));
    const chk = document.getElementById('gstToggleSwitch');
    if (chk) chk.addEventListener('change', () => setMode(chk.checked ? 'inc' : 'ex'));
  }

  function init() {
    const mode = getInitialMode();
    applyMode(mode);
    bindControls();

    document.addEventListener('shopify:section:load', () => applyMode(localStorage.getItem(KEY) || mode));
    document.addEventListener('shopify:block:select', () => applyMode(localStorage.getItem(KEY) || mode));

    // Re-apply when your variant script fires
    document.addEventListener('variant:changed', () => applyMode(localStorage.getItem(KEY) || mode));

    // expose for manual calls after DOM rewrites
    window.__gstApply = () => applyMode(localStorage.getItem(KEY) || mode);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
