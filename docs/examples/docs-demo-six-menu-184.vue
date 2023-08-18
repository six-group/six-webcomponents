<template>
<div class="demo my-app">

        <six-menu id="six-menu-virtualscroll" virtual-scroll> </six-menu>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-menu-184',
  mounted() { 
          const sixMenuDynamicOptions = document.getElementById('six-menu-virtualscroll');
          sixMenuDynamicOptions.items = Array.from(Array(40000).keys()).map((idx) => ({
            label: `label ${idx}`,
            value: `value ${idx}`,
          }));
         }
}
</script>