<template>
<div>

        <six-drawer label="Drawer" class="six-drawer-request-close">
          This drawer will not be closed when you click outside, on the close button or press <kbd>Escape</kbd>.
          <six-button slot="footer">Close</six-button>
        </six-drawer>

        <six-button>Open Drawer</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-drawer-7',
  mounted() { 
          (() => {
            let drawer = document.querySelector('.six-drawer-request-close');
            let openButton = drawer.nextElementSibling;
            let closeButton = drawer.querySelector('six-button');

            openButton.addEventListener('click', () => drawer.show());
            closeButton.addEventListener('click', () => drawer.hide());

            drawer.addEventListener('six-drawer-request-close', (event) => {
              if (
                event.detail.source === 'overlay' ||
                event.detail.source === 'close-button' ||
                event.detail.source === 'keyboard'
              ) {
                event.preventDefault();
              }
            });
          })();
         }
}
</script>