<template>
<div>

        <six-stepper id="progress-stepper"></six-stepper>
        <div style="margin-top: 1rem">
          <six-button id="progress-minus">-10%</six-button>
          <six-button id="progress-plus">+10%</six-button>
          <six-button id="progress-complete">Complete Step</six-button>
          <span id="progress-display" style="margin-left: 1rem; font-weight: bold">Progress: 0%</span>
        </div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-11',
  mounted() { 
          const progressStepper = document.getElementById('progress-stepper');
          const progressDisplay = document.getElementById('progress-display');

          progressStepper.steps = [
            { title: 'Upload Files', icon: 'upload' },
            { title: 'Processing', icon: 'hourglass_empty' },
            { title: 'Complete', icon: 'done_all' },
          ];
          progressStepper.current = 1;
          progressStepper.percent = 0;

          const updateProgress = (change) => {
            let currentPercent = progressStepper.percent || 0;
            currentPercent = Math.max(0, Math.min(100, currentPercent + change));
            progressStepper.percent = currentPercent;
            progressDisplay.textContent = `Progress: ${currentPercent}%`;

            if (currentPercent === 100) {
              setTimeout(() => {
                if (progressStepper.current < progressStepper.steps.length - 1) {
                  progressStepper.current++;
                  progressStepper.percent = 0;
                  progressDisplay.textContent = 'Progress: 0%';
                }
              }, 500);
            }
          };

          document.getElementById('progress-minus').addEventListener('click', () => updateProgress(-10));
          document.getElementById('progress-plus').addEventListener('click', () => updateProgress(10));
          document.getElementById('progress-complete').addEventListener('click', () => updateProgress(100));
         }
}
</script>