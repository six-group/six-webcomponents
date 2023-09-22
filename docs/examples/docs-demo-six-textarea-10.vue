<template>
<div>

        <div style="font-size: 1rem; font-weight: bold; padding-bottom: 1rem">Native Input Element</div>
        <textarea type="text" id="native-textarea" name="type"></textarea>
        <div style="padding-bottom: 0.5rem">
          <div style="padding-top: 1rem">Event Firing History:</div>
          <ul id="native-events-list"></ul>
        </div>

        <div style="font-size: 1rem; font-weight: bold; padding-bottom: 1rem">SIX Input Element</div>
        <six-textarea           label="Events"
          help-text="Check what event is fired when..."
          id="custom-six-textarea"
        ></six-textarea>
        <six-button style="padding-top: 0.5rem" id="event-setting-btn">Set Value</six-button>
        <div style="padding-bottom: 0.5rem">
          <div style="padding-top: 1rem">Event Firing History:</div>
          <ul id="events-list"></ul>
        </div>
        <div style="padding-bottom: 0.5rem">
          <div style="padding-top: 1rem">Event Firing History for six-textarea-value-change:</div>
          <ul id="events-list-value-change"></ul>
        </div>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-textarea-10',
  mounted() { 
          const nativeTextarea = document.getElementById('native-textarea');
          const inputEl = document.getElementById('custom-six-textarea');
          const eventList = document.getElementById('events-list');
          const eventListValueChange = document.getElementById('events-list-value-change');
          const nativeEventList = document.getElementById('native-events-list');
          const eventSettingBtn = document.getElementById('event-setting-btn');

          const logEvent = (eventName, el, color) => (event) => {
            const value = event.target.value;
            el.innerHTML = `${el.innerHTML}<li><span style="font-weight: bold; color: ${color};">${eventName}:</span> ${value}</li>`;
          };
          inputEl.addEventListener('six-textarea-input', logEvent('input', eventList, 'blue'));
          inputEl.addEventListener('six-textarea-change', logEvent('change', eventList, 'red'));
          inputEl.addEventListener('six-textarea-blur', logEvent('blur', eventList, 'green'));
          inputEl.addEventListener('six-textarea-value-change', logEvent('value-change', eventListValueChange));

          nativeTextarea.addEventListener('input', logEvent('input', nativeEventList, 'blue'));
          nativeTextarea.addEventListener('change', logEvent('change', nativeEventList, 'red'));
          nativeTextarea.addEventListener('blur', logEvent('blur', nativeEventList, 'green'));

          eventSettingBtn.addEventListener('click', () => {
            const someString = 'dynamically set value';
            inputEl.value = someString;
            nativeTextarea.value = someString;
          });
         }
}
</script>