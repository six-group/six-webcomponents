<template>
<div>

        <six-date id="multiple-error-text" label="List of string message" invalid></six-date>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-date-24',
  mounted() { 
          const sixDatePicker = document.getElementById('multiple-error-text');
          sixDatePicker.errorText = ['Message 1', 'Message 2'];
          sixDatePicker.errorTextCount = 3;
         }
}
</script>