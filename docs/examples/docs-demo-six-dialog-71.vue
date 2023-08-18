<template>
<div class="demo my-app">

        <six-dialog label="Dialog" class="dialog-width" style="--width: 50vw">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <six-button slot="footer" type="primary">Close</six-button>
        </six-dialog>

        <six-button>Open Dialog</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dialog-71',
  mounted() { 
          const dialogWidth = document.querySelector('.dialog-width');
          const openButtonWidth = dialogWidth.nextElementSibling;
          const closeButtonWidth = dialogWidth.querySelector('six-button[slot="footer"]');

          openButtonWidth.addEventListener('click', () => dialogWidth.show());
          closeButtonWidth.addEventListener('click', () => dialogWidth.hide());
         }
}
</script>