<template>
<div>

        <six-drawer label="Drawer" class="drawer-no-overlay-dismiss">
          This drawer will not be closed when you click outside of it.
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
            let drawer = document.querySelector('.drawer-no-overlay-dismiss');
            let openButton = drawer.nextElementSibling;
            let closeButton = drawer.querySelector('six-button');

            openButton.addEventListener('click', () => drawer.show());
            closeButton.addEventListener('click', () => drawer.hide());

            drawer.addEventListener('six-drawer-overlay-dismiss', (event) => event.preventDefault());
          })();
         }
}
</script>