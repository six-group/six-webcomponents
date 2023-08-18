<template>
<div class="demo my-app">

        <six-drawer label="Drawer" placement="left" class="drawer-placement-left">
          This drawer slides in from the left.
          <six-button slot="footer">Close</six-button>
        </six-drawer>

        <six-button>Open Drawer</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-drawer-76',
  mounted() { 
          (() => {
            let drawer = document.querySelector('.drawer-placement-left');
            let openButton = drawer.nextElementSibling;
            let closeButton = drawer.querySelector('six-button');

            openButton.addEventListener('click', () => drawer.show());
            closeButton.addEventListener('click', () => drawer.hide());
          })();
         }
}
</script>