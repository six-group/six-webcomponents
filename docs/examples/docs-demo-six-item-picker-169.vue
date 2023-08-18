<template>
<div class="demo my-app">

        <six-item-picker id="picked-debounced-2" debounce="500"></six-item-picker>
        <div>Picked Item: <span id="picked-item-2">0</span></div>
        <div>Picked Item Debounced: <span id="picked-item-debounced-2">0</span></div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-169',
  mounted() { 
          const pickedItem = document.getElementById('picked-item-2');
          const pickedItemDebounced = document.getElementById('picked-item-debounced-2');
          const itemPicker = document.getElementById('picked-debounced-2');

          itemPicker.addEventListener('six-item-picker-change', (event) => {
            pickedItem.innerText = event.detail;
          });

          itemPicker.addEventListener('six-item-picker-change-debounced', (event) => {
            console.log(`[ six-item-picker-change-debounced ]`, { event });
            pickedItemDebounced.innerText = event.detail;
          });
         }
}
</script>