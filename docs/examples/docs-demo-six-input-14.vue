<template>
<div>

        <six-input id="multiple-error-text" label="List of string message" invalid></six-input>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-input-14',
  mounted() { 
          const sixInput = document.getElementById('multiple-error-text');
          sixInput.errorText = ['Message 1', 'Message 2'];
          sixInput.errorTextCount = 3;
         }
}
</script>