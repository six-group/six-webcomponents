<template>
<div>

        <six-datepicker id="dynamic-datepicker"></six-datepicker>
        <div style="margin-top: 1rem">
          <span style="font-weight: bold">Selected: </span><span id="dynamic-datepicker-selected">No Date selected yet!</span>
        </div>
        <div style="margin-top: 1rem">
          <six-button id="dynamic-datepicker-btn1">01.01.2020</six-button>
          <six-button id="dynamic-datepicker-btn2">15.06.3020</six-button>
          <six-button id="dynamic-datepicker-btn3">31.12.1420</six-button>
        </div>
        
        
      
</div>
</template>
<style>

          six-datepicker {
            max-width: 25rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-20',
  mounted() { 
          const datepicker = document.getElementById('dynamic-datepicker');
          const selectedDate = document.getElementById('dynamic-datepicker-selected');

          const btn1 = document.getElementById('dynamic-datepicker-btn1');
          btn1.addEventListener('click', () => (datepicker.value = new Date('2020-01-01')));

          const btn2 = document.getElementById('dynamic-datepicker-btn2');
          btn2.addEventListener('click', () => (datepicker.value = new Date('3020-06-15')));

          const btn3 = document.getElementById('dynamic-datepicker-btn3');
          btn3.addEventListener('click', () => (datepicker.value = new Date('1420-12-31')));

          datepicker.addEventListener('six-datepicker-select', (event) => {
            console.log(`[ six-datepicker-select ]`, { date: event.detail });
            selectedDate.innerHTML = `${event.detail.toLocaleDateString()}`;
          });
         }
}
</script>