(function() {
  // Keep the hidden form quantity in sync with the visible qty control
  document.addEventListener('click', function(e){
    if(!e.target.closest('.vmx')) return;

    const row = e.target.closest('tr.vmx__tr');
    const qtyWrap = row && row.querySelector('.vmx__qty');
    const input = qtyWrap && (qtyWrap.querySelector('.js--num'));

    // +/− controls
    if(e.target.classList.contains('js--add') || e.target.classList.contains('js--minus')) {
      e.preventDefault();
      if(!input) return;
      const delta = e.target.classList.contains('js--add') ? 1 : -1;
      const next = Math.max(1, (parseInt(input.value,10)||1) + delta);
      input.value = next;
      const hidden = row.querySelector('form[data-vmx-form] input[name="quantity"]');
      if(hidden) hidden.value = next;
    }

    // manual typing -> keep hidden in sync
  }, false);

  document.addEventListener('input', function(e){
    if(e.target.matches('.vmx__qty .js--num')) {
      const row = e.target.closest('tr.vmx__tr');
      const hidden = row && row.querySelector('form[data-vmx-form] input[name="quantity"]');
      if(hidden) hidden.value = Math.max(1, parseInt(e.target.value,10)||1);
    }
  }, false);
})();

{%- assign ns = 'filter' -%}
<ul>
{%- for v in product.variants -%}
  {%- assign v_mfs = v.metafields | where: 'namespace', ns -%}
  <li>
    <strong>Variant {{ v.id }} / {{ v.sku | default: 'no SKU' }}</strong> —
    {{ v_mfs.size }} metafield(s)
    {%- if v_mfs.size > 0 -%}
      : [
      {%- for mf in v_mfs -%}
        {{ mf.key }}={{ mf | metafield_text | default: mf.value | json }}{% unless forloop.last %}, {% endunless %}
      {%- endfor -%}
      ]
    {%- endif -%}
  </li>
{%- endfor -%}
</ul>
