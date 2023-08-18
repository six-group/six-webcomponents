<template>
<div class="demo my-app">

        <div style="display: flex">
          <six-timepicker id="timepicker-event-debounced-example" format="HH:mm:ss:ms"></six-timepicker>
          <pre style="margin-left: 1.5rem">Fired Event: <span id="event-debounced-example-selected-time"></span></pre>
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
  name: 'docs-demo-six-timepicker-317',
  mounted() { 
          const timepicker = document.getElementById('timepicker-event-debounced-example');
          const selectedTime = document.getElementById('event-debounced-example-selected-time');

          timepicker.addEventListener('six-timepicker-change-debounced', ({ detail }) => {
            selectedTime.innerHTML = JSON.stringify(detail, null, 4);
          });
         }
}
</script>