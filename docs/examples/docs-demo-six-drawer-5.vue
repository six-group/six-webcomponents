<template>
<div>

        <six-drawer label="Drawer" class="drawer-custom-size" style="--size: 50vw">
          This drawer is always 50% of the viewport.
          <six-button slot="footer">Close</six-button>
        </six-drawer>

        <six-button>Open Drawer</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-drawer-5',
  mounted() { 
          (() => {
            let drawer = document.querySelector('.drawer-custom-size');
            let openButton = drawer.nextElementSibling;
            let closeButton = drawer.querySelector('six-button');

            openButton.addEventListener('click', () => drawer.show());
            closeButton.addEventListener('click', () => drawer.hide());
          })();
         }
}
</script>