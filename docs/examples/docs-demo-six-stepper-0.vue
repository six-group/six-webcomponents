<template>
<div>

        <six-stepper id="basic-stepper"></six-stepper>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-0',
  mounted() { 
          const basicStepper = document.getElementById('basic-stepper');
          basicStepper.steps = [
            { title: 'Personal & Financial' },
            { title: 'To Decommission' },
            { title: 'Confirmation' },
          ];
          basicStepper.current = 0;
         }
}
</script>