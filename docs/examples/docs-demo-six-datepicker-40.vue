<template>
<div class="demo my-app">

        <six-datepicker           date-format="dd.mm.yyyy hh:MM:ss"
          type="date-time"
          id="read-select-datetime-picker"
        ></six-datepicker>
        <div id="read-select-datetime-label">No Date selected yet!</div>

        
        
      
</div>
</template>
<style>

          six-datepicker {
            max-width: 25rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-40',
  mounted() { 
          const datepicker = document.getElementById('read-select-datetime-picker');
          const selectedDate = document.getElementById('read-select-datetime-label');

          datepicker.addEventListener('six-datepicker-select', (event) => {
            selectedDate.innerHTML = `selected: ${event.detail.toLocaleString()}`;
          });
         }
}
</script>