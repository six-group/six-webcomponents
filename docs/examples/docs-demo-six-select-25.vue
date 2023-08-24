<template>
<div>

        <six-select id="multiple-error-text" label="List of string message" invalid></six-select>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-25',
  mounted() { 
          const sixSelect = document.getElementById('multiple-error-text');
          sixSelect.errorText = ['Message 1', 'Message 2'];
          sixSelect.errorTextCount = 3;
         }
}
</script>