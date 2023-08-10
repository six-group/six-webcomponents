<template>
<div class="demo my-app">

        <six-drawer label="Drawer" class="drawer-focus">
          <six-input placeholder="I will have focus when the drawer is opened"></six-input>
          <six-button slot="footer">Close</six-button>
        </six-drawer>

        <six-button>Open Drawer</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-drawer-83',
  mounted() { 
          (() => {
            let drawer = document.querySelector('.drawer-focus');
            let input = drawer.querySelector('six-input');
            let openButton = drawer.nextElementSibling;
            let closeButton = drawer.querySelector('six-button');

            openButton.addEventListener('click', () => drawer.show());
            closeButton.addEventListener('click', () => drawer.hide());

            drawer.addEventListener('six-drawer-initial-focus', (event) => {
              event.preventDefault();
              input.setFocus({ preventScroll: true });
            });
          })();
         }
}
</script>