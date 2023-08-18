<template>
<div class="demo my-app">

        <six-drawer label="Drawer" class="drawer-overview">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <six-button slot="footer">Close</six-button>
        </six-drawer>

        <six-button>Open Drawer</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-drawer-75',
  mounted() { 
          (() => {
            let drawer = document.querySelector('.drawer-overview');
            let openButton = drawer.nextElementSibling;
            let closeButton = drawer.querySelector('six-button');

            openButton.addEventListener('click', () => drawer.show());
            closeButton.addEventListener('click', () => drawer.hide());
          })();
         }
}
</script>