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
      { title: 'Login', icon: { iconName: 'person', iconLibrary: 'material-icons' }, description: 'User authentication' },
      { title: 'Verify', icon: { iconName: 'email', iconLibrary: 'material-icons' }, description: 'Email verification' },
      { title: 'Complete', icon: { iconName: 'check_circle', iconLibrary: 'material-icons' }, description: 'Setup complete' },
    ];
    iconStepper.current = 1;
   }
}
</script>