<template>
<div>

        <div style="display: flex">
          <six-timepicker id="timepicker-event-example-12h" format="hh:mm:ss:ms:aa"></six-timepicker>
          <pre style="margin-left: 1.5rem">Fired Event: <span id="event-example-selected-time-12h"></span></pre>
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
  name: 'docs-demo-six-timepicker-18',
  mounted() { 
          const timepicker = document.getElementById('timepicker-event-example-12h');
          const selectedTime = document.getElementById('event-example-selected-time-12h');

          timepicker.addEventListener('six-timepicker-change', ({ detail }) => {
            selectedTime.innerHTML = JSON.stringify(detail, null, 4);
          });
         }
}
</script>