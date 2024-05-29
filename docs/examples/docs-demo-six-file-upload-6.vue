<template>
<div>

        <six-file-upload           id="invalid-with-errors"
          invalid
          error-text="This is a simple string message"
        ></six-file-upload>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-file-upload-6',
  mounted() { 
          const sixInput = document.getElementById('invalid-with-errors');
          sixInput.errorText = ['File is too large', 'Message 2'];
          sixInput.errorTextCount = 3;
         }
}
</script>