<template>
<div>

        <six-dialog label="Dialog" class="dialog-overview">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. aölkjölkjaölsdfas öl
          <six-button slot="footer" type="primary">Close</six-button>
        </six-dialog>

        <six-button>Open Dialog</six-button>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dialog-0',
  mounted() { 
          const dialogOverview = document.querySelector('.dialog-overview');
          const openButton = dialogOverview.nextElementSibling;
          const closeButton = dialogOverview.querySelector('six-button[slot="footer"]');

          openButton.addEventListener('click', () => dialogOverview.show());
          closeButton.addEventListener('click', () => dialogOverview.hide());
         }
}
</script>