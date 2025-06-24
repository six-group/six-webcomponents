<template>
<div>

        <six-item-picker id="it-pick-debounced"></six-item-picker>
        <div>Picked Item: <span id="picked-item">0</span></div>
        <div>Picked Item Debounced: <span id="picked-item-debounced">0</span></div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-13',
  mounted() { 
          const pickedItem = document.getElementById('picked-item');
          const pickedItemDebounced = document.getElementById('picked-item-debounced');
          const itemPicker = document.getElementById('it-pick-debounced');

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