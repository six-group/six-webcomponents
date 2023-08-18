<template>
<div class="demo my-app">

        <div class="alert-toast-wrapper">
          <six-button type="primary">Create Toast</six-button>
        </div>

        

        
      
</div>
</template>
<style>

          .six-toast-stack {
            position: fixed;
            top: 0;
            right: 0;
            z-index: var(--six-z-index-toast);
            width: 28rem;
            max-width: 100%;
            max-height: 100%;
            overflow: auto;
          }

          six-alert {
            box-shadow: var(--six-shadow-large);
            margin: var(--six-spacing-medium);
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-alert-6',
  mounted() { 
          (() => {
            const alertToastImpContainer = document.querySelector('.alert-toast-wrapper');
            const toastCreatorButton = alertToastImpContainer.querySelector('six-button');
            let count = 0;

            // Always escape HTML for text arguments!
            function escapeHtml(html) {
              const div = document.createElement('div');
              div.textContent = html;
              return div.innerHTML;
            }

            // Custom function to emit toast notifications
            function notify(message, type = 'primary', icon = 'info', duration = 3000) {
              const alert = Object.assign(document.createElement('six-alert'), {
                type: type,
                closable: true,
                duration: duration,
                innerHTML: `
                    <six-icon slot="icon">${icon}</six-icon>
                    ${escapeHtml(message)}`,
              });

              document.body.append(alert);
              return alert.toast();
            }

            toastCreatorButton.addEventListener('click', () => {
              const possibleTypes = ['primary', 'success', 'info', 'warning', 'danger'];
              const drawnNumber = Math.round(Math.random(0, 1) * 5) + 1;
              notify(`This is custom toast #${++count}`, possibleTypes[drawnNumber]);
            });
          })();
         }
}
</script>