<template>
<div>

        <six-date id="read-select-date-picker"></six-date>
        <div id="read-select-date-label">No Date selected yet!</div>

        
        
      
</div>
</template>
<style>

          six-date {
            max-width: 25rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-date-1',
  mounted() { 
          const datepicker = document.getElementById('read-select-date-picker');
          const selectedDate = document.getElementById('read-select-date-label');

          datepicker.addEventListener('six-date-select', (event) => {
            selectedDate.innerHTML = `selected: ${event.detail}`;
          });
         }
}
</script>