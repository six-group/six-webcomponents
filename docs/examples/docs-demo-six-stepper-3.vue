<template>
<div>

        <six-stepper id="icon-stepper"></six-stepper>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-3',
  mounted() { 
          const iconStepper = document.getElementById('icon-stepper');
          iconStepper.steps = [
            { title: 'Login', icon: 'person', description: 'User authentication' },
            { title: 'Verify', icon: 'email', description: 'Email verification' },
            { title: 'Complete', icon: 'check_circle', description: 'Setup complete' },
          ];
          iconStepper.current = 1;
         }
}
</script>