<template>
<div>

        <six-dropdown id="six-dropdown-virtual-scrolling" virtual-scroll>
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
  name: 'docs-demo-six-dropdown-13',
  mounted() { 
          const sixDropdownVirtualScrolling = document.getElementById('six-dropdown-virtual-scrolling');
          sixDropdownVirtualScrolling.options = Array.from(Array(40000).keys()).map((idx) => ({
            label: `label ${idx}`,
            value: `value ${idx}`,
          }));
         }
}
</script>