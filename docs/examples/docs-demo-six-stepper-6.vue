<template>
<div>

        <six-stepper id="initial-stepper" clickable></six-stepper>
        <div style="margin-top: 1rem">
          <six-button id="reset-initial-btn">Reset to Initial Step</six-button>
        </div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-6',
  mounted() { 
          const initialStepper = document.getElementById('initial-stepper');
          initialStepper.steps = [
            { title: 'Welcome' },
            { title: 'Configure' },
            { title: 'Review' },
            { title: 'Launch' },
          ];
          initialStepper.initial = 2; // Start at step 3

          document.getElementById('reset-initial-btn').addEventListener('click', () => {
            initialStepper.current = initialStepper.initial;
          });
          initialStepper.addEventListener('six-stepper-change', (event) => {
            initialStepper.current = event.detail;
          });
         }
}
</script>