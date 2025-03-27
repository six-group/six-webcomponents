<template>
<div>

        <six-date id="allowed-date-picker"></six-date>

        
        
      
</div>
</template>
<style>

          six-date {
            max-width: 25rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-date-13',
  mounted() { 
          const datepicker = document.getElementById('allowed-date-picker');
          datepicker.allowedDates = (date) => date.getDate() % 2 === 0;
         }
}
</script>