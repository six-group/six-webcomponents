<template>
<div>

      <six-stepper id="disabled-stepper" clickable initial="1"></six-stepper>
      
    
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-12',
  mounted() { 
        const disabledStepper = document.getElementById('disabled-stepper');
        disabledStepper.steps = [
          { title: 'Step 1', description: 'Available', icon: 'check_circle' },
          { title: 'Step 2', description: 'Available', icon: 'radio_button_checked' },
          { title: 'Step 3', description: 'Locked', icon: 'lock', disabled: true },
        ];

        disabledStepper.addEventListener('six-stepper-change', (event) => {
          // Update current prop (controlled component)
          disabledStepper.current = event.detail;
        });
       }
}
</script>