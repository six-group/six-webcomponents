<template>
<div>

        <six-drawer label="Drawer" placement="top" class="drawer-placement-top">
          This drawer slides in from the top.
          <six-button slot="footer">Close</six-button>
        </six-drawer>

        <six-button>Open Drawer</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-drawer-2',
  mounted() { 
          (() => {
            let drawer = document.querySelector('.drawer-placement-top');
            let openButton = drawer.nextElementSibling;
            let closeButton = drawer.querySelector('six-button');

            openButton.addEventListener('click', () => drawer.show());
            closeButton.addEventListener('click', () => drawer.hide());
          })();
         }
}
</script>