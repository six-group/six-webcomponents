<template>
<div>

        <six-item-picker type="custom" id="custom-item-picker"></six-item-picker>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-10',
  mounted() { 
          const itemPicker = document.getElementById('custom-item-picker');
          // create an array of emojis
          itemPicker.items = Array.from(new Array(50).keys()).map((i) =>
            String.fromCodePoint(`0x1f6${String(i).padStart(2, '0')}`)
          );
         }
}
</script>