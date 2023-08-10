<template>
<div class="demo my-app">

        <div id="datepicker-formats-container" style="display: flex; flex-wrap: wrap">
          <six-datepicker placeholder="dd.mm.yyyy" date-format="dd.mm.yyyy"></six-datepicker>
          <six-datepicker placeholder="yyyy-mm-dd" date-format="yyyy-mm-dd"></six-datepicker>
          <six-datepicker placeholder="dd-mm-yyyy" date-format="dd-mm-yyyy"></six-datepicker>
          <six-datepicker placeholder="dd/mm/yyyy" date-format="dd/mm/yyyy"></six-datepicker>
          <six-datepicker placeholder="yyyy/mm/dd" date-format="yyyy/mm/dd"></six-datepicker>
          <six-datepicker placeholder="dd.mm.yy" date-format="dd.mm.yy"></six-datepicker>
          <six-datepicker placeholder="yy-mm-dd" date-format="yy-mm-dd"></six-datepicker>
          <six-datepicker placeholder="dd-mm-yy" date-format="dd-mm-yy"></six-datepicker>
          <six-datepicker placeholder="dd/mm/yy" date-format="dd/mm/yy"></six-datepicker>
          <six-datepicker placeholder="yy/mm/dd" date-format="yy/mm/dd"></six-datepicker>
        </div>

        <six-button id="datepicker-formats-btn">Apply dates</six-button>

        
        
      
</div>
</template>
<style>

          #datepicker-formats-container six-datepicker {
            max-width: 25rem;
            min-width: 10rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-49',
  mounted() { 
          const datepickerContainer = document.getElementById('datepicker-formats-container');
          const datepickers = datepickerContainer.querySelectorAll('six-datepicker');
          datepickers.forEach((dtpicker) => {
            dtpicker.style.marginBottom = '1rem';
            dtpicker.style.marginRight = '1rem';
          });

          const btn = document.getElementById('datepicker-formats-btn');
          btn.addEventListener('click', () => {
            datepickers.forEach((dtpicker) => {
              dtpicker.value = new Date();
            });
          });
         }
}
</script>