<template>
<div>

        <six-date date-format="dd.mm.yyyy hh:MM:ss" type="date-time" id="read-select-datetime-picker"></six-date>
        <div id="read-select-datetime-label">No Date selected yet!</div>

        
        
      
</div>
</template>
<style>

          six-date {
            max-width: 25rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-date-2',
  mounted() { 
          const datepicker = document.getElementById('read-select-datetime-picker');
          const selectedDate = document.getElementById('read-select-datetime-label');

          datepicker.addEventListener('six-date-select', (event) => {
            selectedDate.innerHTML = `selected: ${event.detail}`;
          });
         }
}
</script>