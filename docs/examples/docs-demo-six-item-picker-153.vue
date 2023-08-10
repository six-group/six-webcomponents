<template>
<div class="demo my-app">

        <six-item-picker id="itemPicker"></six-item-picker>
        <div>Selected item: <span id="selectedItem"></span></div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-153',
  mounted() { 
          const itemPicker = document.getElementById('itemPicker');
          const selectedItem = document.getElementById('selectedItem');

          itemPicker.addEventListener('six-item-picker-change', (event) => {
            selectedItem.innerText = event.detail;
          });
         }
}
</script>