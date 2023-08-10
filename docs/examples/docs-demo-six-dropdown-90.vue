<template>
<div class="demo my-app">

        <div class="dropdown-selection">
          <six-dropdown>
            <six-button slot="trigger" caret>Edit</six-button>
            <six-menu>
              <six-menu-item value="cut">Cut</six-menu-item>
              <six-menu-item value="copy">Copy</six-menu-item>
              <six-menu-item value="paste">Paste</six-menu-item>
            </six-menu>
          </six-dropdown>
        </div>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dropdown-90',
  mounted() { 
          const container0 = document.querySelector('.dropdown-selection');
          const dropdown = container0.querySelector('six-dropdown');

          dropdown.addEventListener('six-menu-item-selected', (event) => {
            let selectedItem = event.detail.item;
            console.log(selectedItem.value);
          });
         }
}
</script>