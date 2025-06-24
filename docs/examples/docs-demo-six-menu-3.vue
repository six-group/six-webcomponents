<template>
<div>

        <six-menu id="six-menu-scrollable" items-shown="2"> </six-menu>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-menu-3',
  mounted() { 
          const sixMenuDynamicOptions = document.getElementById('six-menu-scrollable');
          sixMenuDynamicOptions.items = Array.from(Array(10).keys()).map((idx) => ({
            label: `label ${idx}`,
            value: `value ${idx}`,
          }));
         }
}
</script>