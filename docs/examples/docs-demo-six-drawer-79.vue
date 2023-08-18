<template>
<div class="demo my-app">

        <div           style="
            position: relative;
            border: solid 2px var(--six-panel-border-color);
            height: 300px;
            padding: 1rem;
            margin-bottom: 1rem;
          "
        >
          The drawer will be contained to this box. This content won't shift or be affected in any way when the drawer
          opens.

          <six-drawer label="Drawer" contained class="drawer-contained" style="--size: 50%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <six-button slot="footer">Close</six-button>
          </six-drawer>
        </div>

        <six-button>Open Drawer</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-drawer-79',
  mounted() { 
          (() => {
            let drawer = document.querySelector('.drawer-contained');
            let openButton = drawer.parentElement.nextElementSibling;
            let closeButton = drawer.querySelector('six-button');

            openButton.addEventListener('click', () => drawer.show());
            closeButton.addEventListener('click', () => drawer.hide());
          })();
         }
}
</script>