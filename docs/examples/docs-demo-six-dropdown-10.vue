<template>
<div>

        <six-dropdown id="async-dropdown" async-filter filter-placeholder="Search">
          <six-button slot="trigger" caret>Dropdown</six-button>
          <six-menu id="async-menu">
            <six-menu-item value="search_list_prompt">Use search to show entries</six-menu-item>
          </six-menu>
        </six-dropdown>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dropdown-10',
  mounted() { 
          const asyncDropdown = document.querySelector('#async-dropdown');
          const asyncMenu = document.querySelector('#async-menu');

          for (let i = 0; i < 500; i++) {
            const child = document.createElement('six-menu-item');
            child.innerText = `Value ${i}`;
            child.value = `value-${i}`;
            asyncMenu.appendChild(child);
          }

          const removeAllChildNodes = (parent) => {
            while (parent.firstChild) {
              parent.removeChild(parent.firstChild);
            }
          };

          asyncDropdown.addEventListener('six-async-filter-fired', ($event) => {
            const filterValue = $event.detail.filterValue;

            removeAllChildNodes(asyncMenu);

            const numberOfHits = Math.floor(Math.random() * 25) + 3;
            for (let i = 0; i < numberOfHits; i++) {
              const child = document.createElement('six-menu-item');
              child.innerText = `Value ${filterValue} ${i}`;
              child.value = `value-${filterValue}-${i}`;
              asyncMenu.appendChild(child);
            }
          });
         }
}
</script>