<template>
<div>

        <six-dropdown id="six-dropdown-dynamic-options">
          <six-button slot="trigger" caret>Dropdown</six-button>
        </six-dropdown>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dropdown-12',
  mounted() { 
          const sixDropdownDynamicOptions = document.getElementById('six-dropdown-dynamic-options');
          sixDropdownDynamicOptions.options = Array.from(Array(100).keys()).map((idx) => ({
            label: `label ${idx}`,
            value: `value ${idx}`,
          }));
         }
}
</script>