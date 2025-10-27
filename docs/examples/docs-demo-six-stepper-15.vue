<template>
<div>

        <six-stepper id="wizard-stepper"></six-stepper>
        <div           id="wizard-content"
          style="margin: 1rem 0; padding: 2rem; background: #f9f9f9; border-radius: 4px; min-height: 150px"
        >
          <h3>Step 1: Personal Information</h3>
          <p>Please enter your name, email, and phone number.</p>
        </div>
        <div style="display: flex; justify-content: space-between">
          <six-button id="wizard-prev" disabled>Previous</six-button>
          <six-button id="wizard-next">Next</six-button>
        </div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-15',
  mounted() { 
          const wizardStepper = document.getElementById('wizard-stepper');
          const wizardContent = document.getElementById('wizard-content');
          const prevBtn = document.getElementById('wizard-prev');
          const nextBtn = document.getElementById('wizard-next');

          wizardStepper.steps = [
            { title: 'Personal Info', description: 'Basic details', icon: 'person' },
            { title: 'Address', description: 'Location', icon: 'home' },
            { title: 'Payment', description: 'Billing info', icon: 'payment' },
            { title: 'Review', description: 'Confirm details', icon: 'fact_check' },
          ];
          wizardStepper.current = 0;

          const stepContents = [
            '<h3>Step 1: Personal Information</h3><p>Please enter your name, email, and phone number.</p>',
            '<h3>Step 2: Address</h3><p>Enter your street address, city, and postal code.</p>',
            '<h3>Step 3: Payment</h3><p>Provide your payment and billing information.</p>',
            '<h3>Step 4: Review</h3><p>Review all your information and submit.</p>',
          ];

          const updateWizard = () => {
            const current = wizardStepper.current;
            wizardContent.innerHTML = stepContents[current];
            prevBtn.disabled = current === 0;
            nextBtn.textContent = current === wizardStepper.steps.length - 1 ? 'Submit' : 'Next';
          };

          prevBtn.addEventListener('click', () => {
            if (wizardStepper.current > 0) {
              wizardStepper.current--;
              updateWizard();
            }
          });

          nextBtn.addEventListener('click', () => {
            if (wizardStepper.current < wizardStepper.steps.length - 1) {
              wizardStepper.current++;
              updateWizard();
            } else {
              alert('Wizard completed!');
            }
          });

          updateWizard();
         }
}
</script>