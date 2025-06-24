<template>
<div>

        <six-textarea id="multiple-error-text" label="List of string message" invalid></six-textarea>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-textarea-13',
  mounted() { 
          const sixTextarea = document.getElementById('multiple-error-text');
          sixTextarea.errorText = ['Message 1', 'Message 2'];
          sixTextarea.errorTextCount = 3;
         }
}
</script>