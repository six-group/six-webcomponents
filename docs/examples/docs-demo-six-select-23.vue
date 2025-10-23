<template>
<div>

        <six-select id="six-select-virtual-scroll" virtual-scroll></six-select>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-23',
  mounted() { 
          const sixSelectDynamicOptions = document.getElementById('six-select-virtual-scroll');
          sixSelectDynamicOptions.options = Array.from(Array(100000).keys()).map((idx) => ({
            label: `label ${idx}`,
            value: `value ${idx}`,
          }));
         }
}
</script>