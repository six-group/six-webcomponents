<template>
<div>

        <six-progress-ring percentage="50" size="200" class="progress-ring-labels" style="margin-bottom: 0.5rem"
          >50%</six-progress-ring>

        <br>

        <six-button size="small" circle><six-icon size="small">remove</six-icon></six-button>
        <six-button size="small" circle><six-icon size="small">add</six-icon></six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-progress-ring-4',
  mounted() { 
          const progressRing = document.querySelector('.progress-ring-labels');
          const subtractButton = progressRing.nextElementSibling.nextElementSibling;
          const addButton = subtractButton.nextElementSibling;

          addButton.addEventListener('click', () => {
            const percentage = Math.min(100, progressRing.percentage + 10);
            progressRing.percentage = percentage;
            progressRing.textContent = `${percentage}%`;
          });

          subtractButton.addEventListener('click', () => {
            const percentage = Math.max(0, progressRing.percentage - 10);
            progressRing.percentage = percentage;
            progressRing.textContent = `${percentage}%`;
          });
         }
}
</script>