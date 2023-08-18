<template>
<div class="demo my-app">

        <six-dialog label="Dialog" class="dialog-no-overlay-dismiss">
          This dialog will not be closed when you click outside of it.
          <six-button slot="footer" type="primary">Close</six-button>
        </six-dialog>

        <six-button>Open Dialog</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dialog-73',
  mounted() { 
          const dialogNoOverlay = document.querySelector('.dialog-no-overlay-dismiss');
          const openButtonNoOverlay = dialogNoOverlay.nextElementSibling;
          const closeButtonNoOverlay = dialogNoOverlay.querySelector('six-button[slot="footer"]');

          openButtonNoOverlay.addEventListener('click', () => dialogNoOverlay.show());
          closeButtonNoOverlay.addEventListener('click', () => dialogNoOverlay.hide());

          dialogNoOverlay.addEventListener('six-dialog-overlay-dismiss', (event) => event.preventDefault());
         }
}
</script>