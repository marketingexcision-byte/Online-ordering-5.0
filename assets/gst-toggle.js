(function () {
  const KEY = 'gst_mode'; // 'inc' | 'ex'

  function getMode() {
    const saved = localStorage.getItem(KEY);
    if (saved === 'inc' || saved === 'ex') return saved;
    // Fallback to page default (first price node)
    const n = document.querySelector('.js-gst-price');
    return (n && n.dataset.defaultInc === 'true') ? 'inc' : 'ex';
  }

  function applyMode(mode) {
    document.querySelectorAll('.js-gst-price').forEach(n => {
      const taxable = n.dataset.taxable === 'true';
      const ex = n.dataset.moneyEx;
      const inc = n.dataset.moneyInc;
      n.textContent = taxable ? (mode === 'inc' ? inc : ex) : ex;
    });
    const sel = document.getElementById('gstToggle');
    if (sel) sel.value = mode;
  }

  function setMode(mode) {
    localStorage.setItem(KEY, mode);
    applyMode(mode);
  }

  function init() {
    const mode = getMode();
    // Initial render
    applyMode(mode);

    // Toggle handler
    const sel = document.getElementById('gstToggle');
    if (sel) sel.addEventListener('change', () => setMode(sel.value));

    // Observe dynamic sections (AJAX cart, pagination, quick add)
    const obs = new MutationObserver(() => applyMode(localStorage.getItem(KEY) || mode));
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
