<template>
<div>

      <six-stepper id="programmatic-stepper"></six-stepper>
      <div style="margin-top: 1rem">
        <six-button id="prev-btn">Previous</six-button>
        <six-button id="next-btn">Next</six-button>
      </div>
      
    
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-13',
  mounted() { 
        const programmaticStepper = document.getElementById('programmatic-stepper');
        programmaticStepper.steps = [
          { title: 'Step 1', description: 'First step', icon: 'looks_one' },
          { title: 'Step 2', description: 'Second step', icon: 'looks_two' },
          { title: 'Step 3', description: 'Third step', icon: 'looks_3' },
          { title: 'Step 4', description: 'Fourth step', icon: 'looks_4' },
        ];
        programmaticStepper.current = 0;

        document.getElementById('prev-btn').addEventListener('click', () => {
          if (programmaticStepper.current > 0) {
            programmaticStepper.current--;
          }
        });

        document.getElementById('next-btn').addEventListener('click', () => {
          if (programmaticStepper.current < programmaticStepper.steps.length - 1) {
            programmaticStepper.current++;
          }
        });
       }
}
</script>