<template>
<div>

        <six-timepicker id="dynamic-timepicker"></six-timepicker>
        <div style="margin-top: 1rem">
          <span style="font-weight: bold">Selected: </span><span id="dynamic-timepicker-selected">No Time selected yet!</span>
        </div>
        <div style="margin-top: 1rem">
          <six-button id="dynamic-timepicker-btn1">20:13:22</six-button>
          <six-button id="dynamic-timepicker-btn2">13:33:59</six-button>
          <six-button id="dynamic-timepicker-btn3">02:30:00</six-button>
        </div>
        
        
      
</div>
</template>
<style>

          six-timepicker {
            max-width: 15rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-timepicker-16',
  mounted() { 
          const timepicker = document.getElementById('dynamic-timepicker');
          const selectedTime = document.getElementById('dynamic-timepicker-selected');

          const btn1 = document.getElementById('dynamic-timepicker-btn1');
          btn1.addEventListener('click', () => (timepicker.value = '20:13:22'));

          const btn2 = document.getElementById('dynamic-timepicker-btn2');
          btn2.addEventListener('click', () => (timepicker.value = '13:33:59'));

          const btn3 = document.getElementById('dynamic-timepicker-btn3');
          btn3.addEventListener('click', () => (timepicker.value = '02:30:00'));

          timepicker.addEventListener('six-timepicker-change', ({ detail }) => {
            selectedTime.innerHTML = `${detail.valueAsString}`;
          });
         }
}
</script>