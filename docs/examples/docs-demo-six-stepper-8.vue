<template>
<div>

        <six-stepper id="blue-stepper"></six-stepper>
        <br>
        <six-stepper id="green-stepper"></six-stepper>
        <br>
        <six-stepper id="web-rock-stepper"></six-stepper>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-8',
  mounted() { 
          const blueStepper = document.getElementById('blue-stepper');
          blueStepper.steps = [{ title: 'Start' }, { title: 'In Progress' }, { title: 'Complete' }];
          blueStepper.current = 1;
          blueStepper.color = 'blue';

          const greenStepper = document.getElementById('green-stepper');
          greenStepper.steps = [{ title: 'Start' }, { title: 'In Progress' }, { title: 'Complete' }];
          greenStepper.current = 1;
          greenStepper.color = 'green';

          const webRockStepper = document.getElementById('web-rock-stepper');
          webRockStepper.steps = [{ title: 'Start' }, { title: 'In Progress' }, { title: 'Complete' }];
          webRockStepper.current = 1;
          webRockStepper.color = 'web-rock';
         }
}
</script>