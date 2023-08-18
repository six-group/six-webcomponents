<template>
<div class="demo my-app">

        <six-select id="autocomplete-example" autocomplete clearable></six-select>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-245',
  mounted() { 
          (() => {
            const clearAllChildren = (node) => {
              let child = node.lastElementChild;
              while (child) {
                node.removeChild(child);
                child = node.lastElementChild;
              }
            };

            const createMenuItem = (value, label) => {
              const menuItem = document.createElement('six-menu-item');
              menuItem.innerText = label;
              menuItem.setAttribute('value', value);
              return menuItem;
            };

            const select = document.getElementById('autocomplete-example');

            select.addEventListener('six-select-change', (event) => {
              if (event.detail.isSelected) {
                // don't fetch new values on selection
                return;
              }
              clearAllChildren(select);

              const enteredText = event.detail.value || 'All Values';
              new Array(5).fill('').forEach((item, idx) => {
                select.append(createMenuItem(`option ${enteredText} ${idx}`, `Option ${enteredText} ${idx}`));
              });
            });
          })();
         }
}
</script>