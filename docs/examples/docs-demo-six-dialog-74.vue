<template>
<div class="demo my-app">

        <six-dialog label="Dialog" class="dialog-focus">
          <six-input placeholder="I will have focus when the dialog is opened"></six-input>
          <six-button slot="footer" type="primary">Close</six-button>
        </six-dialog>

        <six-button>Open Dialog</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dialog-74',
  mounted() { 
          const dialogFocus = document.querySelector('.dialog-focus');
          const inputFocus = dialogFocus.querySelector('six-input');
          const openButtonFocus = dialogFocus.nextElementSibling;
          const closeButtonFocus = dialogFocus.querySelector('six-button[slot="footer"]');

          openButtonFocus.addEventListener('click', () => dialogFocus.show());
          closeButtonFocus.addEventListener('click', () => dialogFocus.hide());

          dialogFocus.addEventListener('six-dialog-initial-focus', (event) => {
            event.preventDefault();
            inputFocus.setFocus({ preventScroll: true });
          });
         }
}
</script>