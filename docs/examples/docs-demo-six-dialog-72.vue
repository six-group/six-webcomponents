<template>
<div class="demo my-app">

        <six-dialog label="Dialog" class="dialog-scrolling">
          <div style="height: 150vh; border: dashed 2px var(--six-color-web-rock-200); padding: 0 1rem">
            <p>Scroll down and give it a try! 👇</p>
          </div>
          <six-button slot="footer" type="primary">Close</six-button>
        </six-dialog>

        <six-button>Open Dialog</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dialog-72',
  mounted() { 
          const dialogScrolling = document.querySelector('.dialog-scrolling');
          const openButtonScrolling = dialogScrolling.nextElementSibling;
          const closeButtonScrolling = dialogScrolling.querySelector('six-button[slot="footer"]');

          openButtonScrolling.addEventListener('click', () => dialogScrolling.show());
          closeButtonScrolling.addEventListener('click', () => dialogScrolling.hide());
         }
}
</script>