<template>
<div class="demo my-app">

        <div style="display: flex">
          <six-timepicker id="timepicker-event-example" format="HH:mm:ss:ms"></six-timepicker>
          <pre style="margin-left: 1.5rem">Fired Event: <span id="event-change-example-selected-time"></span></pre>
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
  name: 'docs-demo-six-timepicker-313',
  mounted() { 
          const timepicker = document.getElementById('timepicker-event-example');
          const changeEventTime = document.getElementById('event-change-example-selected-time');

          timepicker.addEventListener('six-timepicker-change', ({ detail }) => {
            changeEventTime.innerHTML = JSON.stringify(detail, null, 4);
          });
         }
}
</script>