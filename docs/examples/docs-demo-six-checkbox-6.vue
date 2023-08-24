<template>
<div>

        <six-checkbox id="multiple-error-text" label="List of string message" invalid></six-checkbox>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-checkbox-6',
  mounted() { 
          const sixCheckbox = document.getElementById('multiple-error-text');
          sixCheckbox.errorText = ['Message 1', 'Message 2'];
          sixCheckbox.errorTextCount = 3;
         }
}
</script>