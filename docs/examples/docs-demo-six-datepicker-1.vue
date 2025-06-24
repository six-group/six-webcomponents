<template>
<div>

        <six-datepicker id="read-select-date-picker"></six-datepicker>
        <div id="read-select-date-label">No Date selected yet!</div>

        
        
      
</div>
</template>
<style>

          six-datepicker {
            max-width: 25rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-1',
  mounted() { 
          const datepicker = document.getElementById('read-select-date-picker');
          const selectedDate = document.getElementById('read-select-date-label');

          datepicker.addEventListener('six-datepicker-select', (event) => {
            selectedDate.innerHTML = `selected: ${event.detail.toLocaleDateString()}`;
          });
         }
}
</script>