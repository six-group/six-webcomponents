<template>
<div>

        <six-menu id="six-menu-dynamic-options"> </six-menu>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-menu-2',
  mounted() { 
          const sixMenuDynamicOptions = document.getElementById('six-menu-dynamic-options');
          sixMenuDynamicOptions.items = Array.from(Array(10).keys()).map((idx) => ({
            label: `label ${idx}`,
            value: `value ${idx}`,
          }));
         }
}
</script>