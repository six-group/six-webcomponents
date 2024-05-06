<template>
<div>

        <six-datepicker id="allowed-date-picker"></six-datepicker>

        
        
      
</div>
</template>
<style>

          six-datepicker {
            max-width: 25rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-15',
  mounted() { 
          const datepicker = document.getElementById('allowed-date-picker');
          datepicker.allowedDates = (date) => date.getDate() % 2 === 0;
         }
}
</script>