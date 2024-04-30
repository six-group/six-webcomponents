<template>
<div>

        <six-datepicker           date-format="dd.mm.yyyy hh:MM:ss"
          type="date-range"
          id="read-select-daterange-picker"
        ></six-datepicker>
        <div id="read-select-daterange-label">No Date range selected yet!</div>

        
        
      
</div>
</template>
<style>

          six-datepicker {
            max-width: 25rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-3',
  mounted() { 
          const datepicker = document.getElementById('read-select-daterange-picker');
          const selectedDate = document.getElementById('read-select-daterange-label');

          datepicker.addEventListener('six-datepicker-select', (event) => {
            selectedDate.innerHTML = `selected: ${event.detail.toLocaleString()}`;
          });
         }
}
</script>