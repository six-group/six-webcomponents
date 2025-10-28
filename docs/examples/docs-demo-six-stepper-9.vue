<template>
<div>

        <six-stepper id="status-stepper"></six-stepper>
        <div style="margin-top: 1rem">
          <six-button id="status-wait">Wait</six-button>
          <six-button id="status-process">Process</six-button>
          <six-button id="status-finish">Finish</six-button>
          <six-button id="status-error">Error</six-button>
        </div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-9',
  mounted() { 
          const statusStepper = document.getElementById('status-stepper');
          statusStepper.steps = [{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }];
          statusStepper.current = 1;

          document.getElementById('status-wait').addEventListener('click', () => {
            statusStepper.status = 'wait';
          });
          document.getElementById('status-process').addEventListener('click', () => {
            statusStepper.status = 'process';
          });
          document.getElementById('status-finish').addEventListener('click', () => {
            statusStepper.status = 'finish';
          });
          document.getElementById('status-error').addEventListener('click', () => {
            statusStepper.status = 'error';
          });
         }
}
</script>