<template>
<div>

        <six-stepper id="description-stepper"></six-stepper>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-1',
  mounted() { 
          const descriptionStepper = document.getElementById('description-stepper');
          descriptionStepper.steps = [
            { title: 'Create Account', description: 'Enter your basic information' },
            { title: 'Verify Email', description: 'Check your inbox for verification' },
            { title: 'Complete Setup', description: 'Finalize your account setup' },
          ];
          descriptionStepper.current = 0;
         }
}
</script>