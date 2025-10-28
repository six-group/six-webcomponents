<template>
<div>

        <six-stepper id="event-stepper"></six-stepper>
        <div id="event-log" style="margin-top: 1rem; padding: 1rem; background: #f5f5f5; border-radius: 4px">
          No events yet
        </div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-stepper-14',
  mounted() { 
          const eventStepper = document.getElementById('event-stepper');
          const eventLog = document.getElementById('event-log');

          eventStepper.steps = [{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }];
          eventStepper.current = 0;
          eventStepper.clickable = true;

          const events = [];
          eventStepper.addEventListener('six-stepper-change', (event) => {
            // Update current prop (controlled component)
            eventStepper.current = event.detail;
            const timestamp = new Date().toLocaleTimeString();
            events.unshift(`[${timestamp}] Step changed to: ${event.detail + 1}`);
            eventLog.innerHTML = events.slice(0, 5).join('<br>');
          });
         }
}
</script>