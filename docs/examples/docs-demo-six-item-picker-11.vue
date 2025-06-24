<template>
<div>

        <div style="display: flex">
          <six-item-picker id="async-number-item-picker" max="1" roundtrip="false"></six-item-picker>
          <six-item-picker type="letter" id="async-letter-item-picker" max="d"></six-item-picker>
          <six-item-picker type="custom" id="async-custom-item-picker"></six-item-picker>
        </div>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-11',
  mounted() { 
          const numberItemPicker = document.getElementById('async-number-item-picker');
          const letterItemPicker = document.getElementById('async-letter-item-picker');
          const customItemPicker = document.getElementById('async-custom-item-picker');

          setTimeout(() => {
            numberItemPicker.value = 1;
            letterItemPicker.value = 'd';
            customItemPicker.items = ['AM', 'PM'];
          }, 1000);

          setTimeout(() => {
            numberItemPicker.min = -5;
            numberItemPicker.roundtrip = true;

            letterItemPicker.min = 'b';
            letterItemPicker.roundtrip = false;

            customItemPicker.value = 'AM';
          }, 2000);

          setTimeout(() => {
            customItemPicker.items = ['AM', 'BM', 'CM'];
          }, 3000);
         }
}
</script>