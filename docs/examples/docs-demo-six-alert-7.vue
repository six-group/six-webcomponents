<template>
<div>

        <div class="toast-stack-wrapper">
          <six-button type="primary">Create 5 Toasts</six-button>
        </div>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-alert-7',
  mounted() { 
          (() => {
            const toastStackWrapper = document.querySelector('.toast-stack-wrapper');
            const createToastButton = toastStackWrapper.querySelector('six-button');

            // Always escape HTML for text arguments!
            function escapeHtml(html) {
              const div = document.createElement('div');
              div.textContent = html;
              return div.innerHTML;
            }

            // Custom function to emit toast notifications
            function createToast(message, type = 'primary', icon = 'info', duration = 4000) {
              const toast = Object.assign(document.createElement('six-alert'), {
                type: type,
                closable: true,
                duration: duration,
                innerHTML: `
            <six-icon slot="icon">${icon}</six-icon>
            ${escapeHtml(message)}`,
              });
              document.body.appendChild(toast);
              toast.toast();
            }

            createToastButton.addEventListener('click', () => {
              const toastTypes = ['primary', 'success', 'info', 'warning', 'danger'];
              let delay = 0;
              for (let i = 1; i <= 5; i++) {
                const randomType = toastTypes[Math.floor(Math.random() * toastTypes.length)];
                setTimeout(() => {
                  createToast(`Toast #${i}`, randomType, 'info');
                }, delay);
                delay += 200;
              }
            });
          })();
         }
}
</script>