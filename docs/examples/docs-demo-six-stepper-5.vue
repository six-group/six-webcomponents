<template>
<div>

      <six-stepper id="current-stepper"></six-stepper>
      <div style="margin-top: 1rem">
        <six-button id="step-btn-0">Step 1</six-button>
        <six-button id="step-btn-1">Step 2</six-button>
        <six-button id="step-btn-2">Step 3</six-button>
      </div>
      
    
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-5',
  mounted() { 
        const currentStepper = document.getElementById('current-stepper');
        currentStepper.steps = [{ title: 'Waiting' }, { title: 'In Progress' }, { title: 'Complete' }];
        currentStepper.current = 1;

        document.getElementById('step-btn-0').addEventListener('click', () => {
          currentStepper.current = 0;
        });
        document.getElementById('step-btn-1').addEventListener('click', () => {
          currentStepper.current = 1;
        });
        document.getElementById('step-btn-2').addEventListener('click', () => {
          currentStepper.current = 2;
        });
       }
}
</script>