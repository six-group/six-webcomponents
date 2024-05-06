<template>
<div>

        <six-datepicker id="multiple-error-text" label="List of string message" invalid></six-datepicker>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-26',
  mounted() { 
          const sixDatePicker = document.getElementById('multiple-error-text');
          sixDatePicker.errorText = ['Message 1', 'Message 2'];
          sixDatePicker.errorTextCount = 3;
         }
}
</script>