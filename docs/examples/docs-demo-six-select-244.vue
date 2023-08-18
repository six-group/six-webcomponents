<template>
<div class="demo my-app">

        <six-select id="infinite-scoll-dropdown">
          <six-menu-item id="infinite-scroll-menu" value="search_list_prompt">Value 0</six-menu-item>
        </six-select>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-244',
  mounted() { 
          const asyncSelect = document.querySelector('#infinite-scoll-dropdown');
          const asyncMenu = document.querySelector('#infinite-scroll-menu').parentElement;

          let id = 1;

          for (let i = 0; i < 20; i++) {
            const child = document.createElement('six-menu-item');
            child.innerText = `Value ${id}`;
            child.value = `value-${id}`;
            asyncMenu.appendChild(child);
            id++;
          }

          asyncSelect.addEventListener('six-dropdown-scroll', ($event) => {
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