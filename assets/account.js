/* assets/account.js */
(() => {
  // Tabs ---------------------------------------------------
  const tabs = document.querySelectorAll('.tab-nav .tab');
  const panels = document.querySelectorAll('.panel');

  function showTab(hash) {
    const target = (hash && document.querySelector(hash)) ? hash : '#orders';
    panels.forEach(p => p.classList.toggle('active', '#'+p.id === target));
    tabs.forEach(t => t.classList.toggle('active', t.getAttribute('href') === target));
  }

  tabs.forEach(t => t.addEventListener('click', e => {
    e.preventDefault();
    const hash = t.getAttribute('href');
    history.replaceState({tab:hash}, '', hash);
    showTab(hash);
  }));

  window.addEventListener('hashchange', () => showTab(location.hash));
  showTab(location.hash);

  // Country/Province (new address) -------------------------
  if (window.Shopify && Shopify.CountryProvinceSelector) {
    try { new Shopify.CountryProvinceSelector('address_country_new','address_province_new',{hideElement:'address_province_container_new'}); } catch(e){}
  }

  // Address helpers (toggle) -------------------------------
  window.Shopify = window.Shopify || {};
  Shopify.CustomerAddress = Shopify.CustomerAddress || {};
  Shopify.CustomerAddress.toggleForm = function(id){
    const el = document.getElementById('edit_address_'+id);
    if (el) el.classList.toggle('hide');
    return false;
  }
  Shopify.CustomerAddress.toggleNewForm = function(){
    const el = document.getElementById('add_address');
    if (el) el.classList.toggle('hide');
    return false;
  }
  Shopify.CustomerAddress.destroy = function(url, msg){
    if (confirm(msg || 'Are you sure you wish to delete this address?')) {
      Shopify.postLink(url, {parameters:{_method:'delete'}});
    }
  }

  // Orders → Drawer (AJAX) --------------------------------
  const drawer = document.querySelector('.order-drawer');
  if (!drawer) return;
  const panel  = drawer.querySelector('.order-drawer__panel');
  const contentId = 'order-drawer-content';
  let lastFocus = null;

  function skeleton(){
    return `<div class="ex-order"><div class="ex-card" aria-busy="true">Loading order…</div></div>`;
  }

  function openDrawer() {
    lastFocus = document.activeElement;
    drawer.classList.add('is-open');
    panel.setAttribute('aria-modal', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('is-open');
    panel.removeAttribute('aria-modal');
    document.body.style.overflow = '';
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    // Keep you on Orders tab:
    if (!location.hash || !location.hash.startsWith('#orders')) history.replaceState(null, '', '#orders');
  }

  drawer.addEventListener('click', e => {
    if (e.target === drawer) closeDrawer();
  });
  drawer.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Intercept order links in the table
  document.addEventListener('click', async (e) => {
    const a = e.target.closest('a.js-order-link');
    if (!a) return;
    e.preventDefault();

    openDrawer();
    panel.innerHTML = `
      <div class="order-drawer__head">
        <strong>Order details</strong>
        <button class="order-drawer__close" aria-label="Close" type="button">×</button>
      </div>
      <div id="${contentId}">${skeleton()}</div>
    `;
    panel.querySelector('.order-drawer__close').addEventListener('click', closeDrawer);

    const url = new URL(a.getAttribute('href'), location.origin);
    // Prefer AJAX fragment (?view=fragment). If not available, fallback to full page and extract.
    if (!url.searchParams.has('view')) url.searchParams.set('view','fragment');

    try {
      const res = await fetch(url.toString(), { headers: { 'X-Requested-With':'fetch' }});
      const html = await res.text();
      const doc  = new DOMParser().parseFromString(html, 'text/html');
      let frag = doc.querySelector('[data-order-fragment]') || doc.querySelector('#ex-order-details');
      if (!frag) {
        // fallback: try common structures
        frag = doc.querySelector('.order-table')?.closest('.grid,.container') || doc.body;
      }
      document.getElementById(contentId).innerHTML = frag.outerHTML;
      history.replaceState({tab:'#orders'}, '', '#orders');
    } catch (err) {
      document.getElementById(contentId).innerHTML =
        `<div class="ex-card" style="--stripe-color:#d52e30">Sorry, we couldn’t load this order. <a href="${a.href}">Open full page</a>.</div>`;
    }
  });
})();
