<template>
<div>

        <div class="min-max-demo">
          <six-date id="min-max-date-picker"></six-date>
          <six-date id="only-min-date-picker"></six-date>
          <six-date id="only-max-date-picker"></six-date>
        </div>

        <div style="margin-top: 1rem">
          <span style="font-weight: bold">Selected: </span><span id="min-max-date-selected">No Date selected yet!</span>
          
        </div>

        

        
      
</div>
</template>
<style>

            six-date {
              max-width: 25rem;
            }
          
          .min-max-demo {
            display: flex;
            flex-wrap: wrap;
          }

          .min-max-demo six-date {
            min-width: 15rem;
            margin-right: 1rem;
            margin-bottom: 1rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-date-12',
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

          minMaxDatepicker.addEventListener('six-date-select', (event) => {
            selectedDate.innerHTML = `${event.detail}`;
          });
         }
}
</script>