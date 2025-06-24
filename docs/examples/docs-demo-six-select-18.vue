<template>
<div>

        <six-select id="async-select" async-filter filter-placeholder="Enter a number">
          <six-menu-item id="async-menu-item" value="search_list_prompt">Use search to show entries</six-menu-item>
        </six-select>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-18',
  mounted() { 
          const asyncSelect = document.querySelector('#async-select');
          const asyncMenu = document.querySelector('#async-menu-item').parentElement;

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

          asyncSelect.addEventListener('six-async-filter-fired', ($event) => {
            const filterValue = $event.detail.filterValue;
            removeAllChildNodes(asyncMenu);
            for (let i = 0; i < 500; i++) {
              const child = document.createElement('six-menu-item');
              child.innerText = `Value ${i}`;
              child.value = `value-${i}`;
              if (
                filterValue.includes(`${i}`) ||
                filterValue.toLocaleLowerCase().includes(`value`) ||
                filterValue.toLocaleLowerCase().includes(`value ${i}`) ||
                filterValue === ''
              ) {
                asyncMenu.appendChild(child);
              }
            }
          });
         }
}
</script>