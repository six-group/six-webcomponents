<template>
<div>

      <six-stepper id="error-stepper"></six-stepper>
      
    
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-10',
  mounted() { 
        const errorStepper = document.getElementById('error-stepper');
        errorStepper.steps = [
          { title: 'Step 1', status: 'finish' },
          { title: 'Step 2', status: 'error' },
          { title: 'Step 3', status: 'wait' },
        ];
        errorStepper.current = 1;
        errorStepper.status = 'error';
       }
}
</script>