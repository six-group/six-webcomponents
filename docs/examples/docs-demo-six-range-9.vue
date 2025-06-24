<template>
<div>

        <six-range id="multiple-error-text" label="List of string message" invalid></six-range>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-range-9',
  mounted() { 
          const sixRange = document.getElementById('multiple-error-text');
          sixRange.errorText = ['Message 1', 'Message 2'];
          sixRange.errorTextCount = 3;
         }
}
</script>