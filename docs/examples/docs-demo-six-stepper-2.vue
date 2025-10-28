<template>
<div>

      <six-stepper id="subtitle-stepper"></six-stepper>
      
    
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-2',
  mounted() { 
        const subtitleStepper = document.getElementById('subtitle-stepper');
        subtitleStepper.steps = [
          { title: 'Step 1', subTitle: '00:00:05', description: 'First step completed' },
          { title: 'Step 2', subTitle: '00:01:02', description: 'Currently in progress' },
          { title: 'Step 3', subTitle: 'waiting', description: 'Waiting to start' },
        ];
        subtitleStepper.current = 1;
       }
}
</script>