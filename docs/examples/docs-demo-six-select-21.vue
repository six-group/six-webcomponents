<template>
<div>

        <six-select filter multiple id="six-select-dynamic-options"></six-select>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-21',
  mounted() { 
          const sixSelectDynamicOptions = document.getElementById('six-select-dynamic-options');
          sixSelectDynamicOptions.options = Array.from(Array(100).keys()).map((idx) => ({
            label: `label ${idx}`,
            value: `value ${idx}`,
          }));
         }
}
</script>