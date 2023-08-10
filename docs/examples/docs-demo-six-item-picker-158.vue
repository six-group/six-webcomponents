<template>
<div class="demo my-app">

        <six-item-picker type="custom" id="fibonacci-picker" value="3" min="2"></six-item-picker>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-158',
  mounted() { 
          const fibonacciNumbers = Array.from(new Array(30).keys());
          fibonacciNumbers.forEach((c, i, arr) => {
            if (i < 2) {
              return c;
            }
            arr[i] = arr[i - 2] + arr[i - 1];
          });

          const fiboPicker = document.getElementById('fibonacci-picker');
          fiboPicker.items = fibonacciNumbers;
         }
}
</script>