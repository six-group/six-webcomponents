<template>
<div class="demo my-app">

        <six-drawer label="Drawer" placement="bottom" class="drawer-placement-bottom">
          This drawer slides in from the bottom.
          <six-button slot="footer">Close</six-button>
        </six-drawer>

        <six-button>Open Drawer</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-drawer-78',
  mounted() { 
          (() => {
            let drawer = document.querySelector('.drawer-placement-bottom');
            let openButton = drawer.nextElementSibling;
            let closeButton = drawer.querySelector('six-button');

            openButton.addEventListener('click', () => drawer.show());
            closeButton.addEventListener('click', () => drawer.hide());
          })();
         }
}
</script>