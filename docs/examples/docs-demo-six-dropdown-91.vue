<template>
<div class="demo my-app">

        <div class="dropdown-selection-alt">
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
  name: 'docs-demo-six-dropdown-91',
  mounted() { 
          const container1 = document.querySelector('.dropdown-selection-alt');
          const cut = container1.querySelector('six-menu-item[value="cut"]');
          const copy = container1.querySelector('six-menu-item[value="copy"]');
          const paste = container1.querySelector('six-menu-item[value="paste"]');

          cut.addEventListener('click', () => console.log('cut'));
          copy.addEventListener('click', () => console.log('copy'));
          paste.addEventListener('click', () => console.log('paste'));
         }
}
</script>