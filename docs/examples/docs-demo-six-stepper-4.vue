<template>
<div>

      <six-stepper id="symbols-stepper"></six-stepper>
      
    
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-4',
  mounted() { 
        const symbolsStepper = document.getElementById('symbols-stepper');
        symbolsStepper.steps = [
          { title: 'Upload', icon: 'upload_file' },
          { title: 'Process', icon: 'sync' },
          { title: 'Download', icon: 'download' },
        ];
        symbolsStepper.current = 1;
       }
}
</script>