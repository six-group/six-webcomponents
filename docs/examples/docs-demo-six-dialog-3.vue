<template>
<div>

        <six-dialog label="Dialog" class="six-dialog-request-close">
          This dialog will not be closed when you click outside, on the close button or press <kbd>Escape</kbd>.
          <six-button slot="footer" type="primary">Close</six-button>
        </six-dialog>

        <six-button>Open Dialog</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dialog-3',
  mounted() { 
          const dialogNoClose = document.querySelector('.six-dialog-request-close');
          const openButtonNoOverlay = dialogNoClose.nextElementSibling;
          const closeButtonNoOverlay = dialogNoClose.querySelector('six-button[slot="footer"]');

          openButtonNoOverlay.addEventListener('click', () => dialogNoClose.show());
          closeButtonNoOverlay.addEventListener('click', () => dialogNoClose.hide());

          dialogNoClose.addEventListener('six-dialog-request-close', (event) => {
            if (
              event.detail.source === 'overlay' ||
              event.detail.source === 'close-button' ||
              event.detail.source === 'keyboard'
            ) {
              event.preventDefault();
            }
          });
         }
}
</script>