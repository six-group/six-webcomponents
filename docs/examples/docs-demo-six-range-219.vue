<template>
<div class="demo my-app">

        <six-range min="0" max="100" step="1" class="range-with-custom-formatter"></six-range>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-range-219',
  mounted() { 
          const range = document.querySelector('.range-with-custom-formatter');
          range.tooltipFormatter = (value) => `Total - ${value}%`;
         }
}
</script>