<template>
<div class="demo my-app">

        <div class="min-max-demo">
          <six-datepicker id="min-max-date-picker"></six-datepicker>
          <six-datepicker id="only-min-date-picker"></six-datepicker>
          <six-datepicker id="only-max-date-picker"></six-datepicker>
        </div>

        <div style="margin-top: 1rem">
          <span style="font-weight: bold">Selected: </span><span id="min-max-date-selected">No Date selected yet!</span>
          six-datepicker { max-width: 25rem; }
        </div>

        

        
      
</div>
</template>
<style>

          .min-max-demo {
            display: flex;
            flex-wrap: wrap;
          }

          .min-max-demo six-datepicker {
            min-width: 15rem;
            margin-right: 1rem;
            margin-bottom: 1rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-50',
  mounted() { 
          const minMaxDatepicker = document.getElementById('min-max-date-picker');
          const minDatepicker = document.getElementById('only-min-date-picker');
          const maxDatepicker = document.getElementById('only-max-date-picker');
          const selectedDate = document.getElementById('min-max-date-selected');

          const getDateFromNow = (days) => new Date(new Date().setDate(new Date().getDate() + days));

          minMaxDatepicker.value = new Date();
          minMaxDatepicker.min = getDateFromNow(-3);
          minMaxDatepicker.max = getDateFromNow(2);

          minDatepicker.min = getDateFromNow(-3);
          maxDatepicker.max = getDateFromNow(2);

          minMaxDatepicker.addEventListener('six-datepicker-select', (event) => {
            selectedDate.innerHTML = `${event.detail.toLocaleDateString()}`;
          });
         }
}
</script>