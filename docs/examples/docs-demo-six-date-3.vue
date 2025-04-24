<template>
<div>

        <six-date id="allowed-dates-example" label="Only weekends allowed"></six-date>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-date-3',
  mounted() { 
          const weekendOnlyDate = document.getElementById('allowed-dates-example');
          weekendOnlyDate.allowedDates = (isoDate) => {
            const day = new Date(isoDate).getDay();
            return day === 0 || day === 6; // Only allow Saturday (6) and Sunday (0)
          };
         }
}
</script>