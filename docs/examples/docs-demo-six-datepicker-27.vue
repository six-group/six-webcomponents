<template>
<div>

        <six-datepicker id="daterange-picker" type="date-range" range=""> </six-datepicker>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-27',
  mounted() { 
          const sixDatePicker = document.getElementById('daterange-picker');
          const now = new Date();
          sixDatePicker.range = { from: now, to: new Date().setDate(5) };
         }
}
</script>