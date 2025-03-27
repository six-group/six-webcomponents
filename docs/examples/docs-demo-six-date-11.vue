<template>
<div>

        <div id="datepicker-formats-container" style="display: flex; flex-wrap: wrap">
          <six-date placeholder="dd.mm.yyyy" date-format="dd.mm.yyyy"></six-date>
          <six-date placeholder="yyyy-mm-dd" date-format="yyyy-mm-dd"></six-date>
          <six-date placeholder="dd-mm-yyyy" date-format="dd-mm-yyyy"></six-date>
          <six-date placeholder="dd/mm/yyyy" date-format="dd/mm/yyyy"></six-date>
          <six-date placeholder="yyyy/mm/dd" date-format="yyyy/mm/dd"></six-date>
          <six-date placeholder="dd.mm.yy" date-format="dd.mm.yy"></six-date>
          <six-date placeholder="yy-mm-dd" date-format="yy-mm-dd"></six-date>
          <six-date placeholder="dd-mm-yy" date-format="dd-mm-yy"></six-date>
          <six-date placeholder="dd/mm/yy" date-format="dd/mm/yy"></six-date>
          <six-date placeholder="yy/mm/dd" date-format="yy/mm/dd"></six-date>
        </div>

        <six-button id="datepicker-formats-btn">Apply dates</six-button>

        
        
      
</div>
</template>
<style>

          #datepicker-formats-container six-date {
            max-width: 25rem;
            min-width: 10rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-date-11',
  mounted() { 
          const datepickerContainer = document.getElementById('datepicker-formats-container');
          const datepickers = datepickerContainer.querySelectorAll('six-date');
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