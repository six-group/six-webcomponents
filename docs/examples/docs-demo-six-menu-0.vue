<template>
<div>

        <six-menu style="max-width: 200px">
          <six-menu-item value="undo">Undo</six-menu-item>
          <six-menu-item value="redo">Redo</six-menu-item>
          <six-menu-divider></six-menu-divider>
          <six-menu-item value="cut">Cut</six-menu-item>
          <six-menu-item value="copy">Copy</six-menu-item>
          <six-menu-item value="paste">Paste</six-menu-item>
          <six-menu-item value="delete">Delete</six-menu-item>
        </six-menu>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-menu-0',
  mounted() { 
          let menuElement = document.querySelector('six-menu');
          menuElement.addEventListener('six-menu-item-selected', (event) => {
            alert(event.detail.name);
          });
         }
}
</script>