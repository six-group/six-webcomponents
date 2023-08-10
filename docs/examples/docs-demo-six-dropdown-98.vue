<template>
<div class="demo my-app">

        <six-dropdown id="six-dropdown-virtual-scrolling-filtered" virtual-scroll filter>
          <six-button slot="trigger" caret>Dropdown</six-button>
        </six-dropdown>
        
        
      
</div>
</template>
<style>

          six-dropdown::part(menu) {
            min-width: 160px;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-dropdown-98',
  mounted() { 
          const sixDropdownVirtualScrolling = document.getElementById('six-dropdown-virtual-scrolling-filtered');
          sixDropdownVirtualScrolling.options = Array.from(Array(40000).keys()).map((idx) => ({
            label: `label ${idx}`,
            value: `value ${idx}`,
          }));

          sixDropdownVirtualScrolling.addEventListener('six-menu-item-selected', (e) =>
            alert(`selected ${e.detail.name}`)
          );
         }
}
</script>