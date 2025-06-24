<template>
<div>

        <six-dropdown id="infinite-scoll-dropdown">
          <six-button slot="trigger" caret>Dropdown</six-button>
          <six-menu id="infinite-scroll-menu"> </six-menu>
        </six-dropdown>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dropdown-11',
  mounted() { 
          const asyncDropdown = document.querySelector('#infinite-scoll-dropdown');
          const asyncMenu = document.querySelector('#infinite-scroll-menu');

          let id = 0;

          for (let i = 0; i < 20; i++) {
            const child = document.createElement('six-menu-item');
            child.innerText = `Value ${id}`;
            child.value = `value-${id}`;
            asyncMenu.appendChild(child);
            id++;
          }

          asyncDropdown.addEventListener('six-dropdown-scroll', ($event) => {
            const { scrollRatio } = $event.detail;

            // add new elements once we reach almost bottom
            if (scrollRatio > 0.8) {
              for (let i = 0; i < 20; i++) {
                const child = document.createElement('six-menu-item');
                child.innerText = `Value ${id}`;
                child.value = `value-${id}`;
                asyncMenu.appendChild(child);
                id++;
              }
            }
          });
         }
}
</script>