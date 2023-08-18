<template>
<div class="demo my-app">

        <div class="alert-duration">
          <six-button type="primary">Show Alert</six-button>

          <six-alert type="primary" duration="3000" closable>
            <six-icon slot="icon">info</six-icon>
            This alert will automatically hide itself after three seconds, unless you interact with it.
          </six-alert>
        </div>

        

        
      
</div>
</template>
<style>

          .alert-duration six-alert {
            margin-top: var(--six-spacing-medium);
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-alert-4',
  mounted() { 
          (() => {
            const container = document.querySelector('.alert-duration');
            const button = container.querySelector('six-button');
            const disappearingAlert = container.querySelector('six-alert');

            button.addEventListener('click', () => disappearingAlert.show());
          })();
         }
}
</script>