<template>
<div>

        <six-drawer label="Drawer" class="drawer-scrolling">
          <div style="height: 150vh; border: dashed 2px var(--six-color-web-rock-200); padding: 0 1rem">
            <p>Scroll down and give it a try! 👇</p>
          </div>
          <six-button slot="footer">Close</six-button>
        </six-drawer>

        <six-button>Open Drawer</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-drawer-6',
  mounted() { 
          (() => {
            let drawer = document.querySelector('.drawer-scrolling');
            let openButton = drawer.nextElementSibling;
            let closeButton = drawer.querySelector('six-button');

            openButton.addEventListener('click', () => drawer.show());
            closeButton.addEventListener('click', () => drawer.hide());
          })();
         }
}
</script>