<template>
<div class="demo my-app">

        <six-progress-bar percentage="50" class="progress-bar-labels">50%</six-progress-bar>

        <br>

        <six-button size="small" circle><six-icon size="small">remove</six-icon></six-button>
        <six-button size="small" circle><six-icon size="small">add</six-icon></six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-progress-bar-202',
  mounted() { 
          const progressBar = document.querySelector('.progress-bar-labels');
          const subtractButton = progressBar.nextElementSibling.nextElementSibling;
          const addButton = subtractButton.nextElementSibling;

          addButton.addEventListener('click', () => {
            const percentage = Math.min(100, progressBar.percentage + 10);
            progressBar.percentage = percentage;
            progressBar.textContent = `${percentage}%`;
          });

          subtractButton.addEventListener('click', () => {
            const percentage = Math.max(0, progressBar.percentage - 10);
            progressBar.percentage = percentage;
            progressBar.textContent = `${percentage}%`;
          });
         }
}
</script>