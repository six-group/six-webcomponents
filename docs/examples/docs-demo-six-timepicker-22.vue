<template>
<div>

        <six-timepicker id="multiple-error-text" label="List of string message" invalid></six-timepicker>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-timepicker-22',
  mounted() { 
          const sixTimepicker = document.getElementById('multiple-error-text');
          sixTimepicker.errorText = ['Message 1', 'Message 2'];
          sixTimepicker.errorTextCount = 3;
         }
}
</script>