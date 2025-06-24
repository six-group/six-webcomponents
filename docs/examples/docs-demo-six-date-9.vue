<template>
<div>

        <div id="event-example-label">No Date selected yet!</div>
        <six-date id="event-example-picker" label="Select a date"></six-date>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-date-9',
  mounted() { 
          const datepicker = document.getElementById('event-example-picker');
          const selectedDate = document.getElementById('event-example-label');

          datepicker.addEventListener('change', (event) => {
            selectedDate.innerHTML = `Selected: ${event.target.value}`;
          });
         }
}
</script>