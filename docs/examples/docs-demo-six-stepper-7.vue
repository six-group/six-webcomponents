<template>
<div>

        <six-stepper id="clickable-stepper"></six-stepper>
        <div id="step-content" style="margin-top: 1rem; padding: 1rem; background: #f5f5f5; border-radius: 4px">
          <strong>Step 1:</strong> Personal Information
        </div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-7',
  mounted() { 
          const clickableStepper = document.getElementById('clickable-stepper');
          const stepContent = document.getElementById('step-content');

          clickableStepper.steps = [
            { title: 'Personal Info', description: 'Basic details' },
            { title: 'Address', description: 'Location details' },
            { title: 'Review', description: 'Final check' },
          ];
          clickableStepper.current = 0;
          clickableStepper.clickable = true;

          const contents = [
            '<strong>Step 1:</strong> Personal Information',
            '<strong>Step 2:</strong> Address Details',
            '<strong>Step 3:</strong> Review & Submit',
          ];

          clickableStepper.addEventListener('six-stepper-change', (event) => {
            // Update current prop to reflect the change (controlled component)
            clickableStepper.current = event.detail;
            stepContent.innerHTML = contents[event.detail];
          });
         }
}
</script>