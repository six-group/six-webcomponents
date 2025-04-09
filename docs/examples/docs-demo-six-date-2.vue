<template>
<div>

        <six-date label="Only weekends allowed"></six-date>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-date-2',
  mounted() { 
          const weekendPicker = document.querySelector('six-date[label="Only weekends allowed"]');

          // You can also set the function programmatically
          weekendPicker.allowedDates = (date) => {
            const day = new Date(date).getDay();
            return day === 0 || day === 6; // Only allow Saturday (6) and Sunday (0)
          };
         }
}
</script>