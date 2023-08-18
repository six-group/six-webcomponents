<template>
<div class="demo my-app">

        <div class="selecting-example">
          <six-select placeholder="">
            <six-menu-item value="option-1">Option 1</six-menu-item>
            <six-menu-item value="option-2">Option 2</six-menu-item>
            <six-menu-item value="option-3">Option 3</six-menu-item>
          </six-select>

          <br>

          <six-button data-option="option-1">Set 1</six-button>
          <six-button data-option="option-2">Set 2</six-button>
          <six-button data-option="option-3">Set 3</six-button>
        </div>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-237',
  mounted() { 
          (() => {
            const container = document.querySelector('.selecting-example');
            const select = container.querySelector('six-select');

            [...container.querySelectorAll('six-button')].map((button) => {
              button.addEventListener('click', () => {
                select.value = button.dataset.option;
              });
            });
          })();
         }
}
</script>