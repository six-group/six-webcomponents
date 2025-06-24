<template>
<div>

        <six-switch id="multiple-error-text" label="List of string message" invalid></six-switch>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-switch-5',
  mounted() { 
          const sixSwitch = document.getElementById('multiple-error-text');
          sixSwitch.errorText = ['Message 1', 'Message 2'];
          sixSwitch.errorTextCount = 3;
         }
}
</script>