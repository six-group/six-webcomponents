<template>
<div>

        <div style="font-size: 1rem; font-weight: bold; padding-bottom: 1rem">Native Input Element</div>
        <input type="text" id="native-input" name="type" >
        <div style="padding-bottom: 0.5rem">
          <div style="padding-top: 1rem">Event Firing History:</div>
          <ul id="native-events-list"></ul>
        </div>

        <div style="font-size: 1rem; font-weight: bold; padding-bottom: 1rem">SIX Input Element</div>
        <six-input label="Events" help-text="Check what event is fired when..." id="events-input" clearable></six-input>
        <six-button style="padding-top: 0.5rem" id="event-setting-btn">Set Value</six-button>
        <div style="padding-bottom: 0.5rem">
          <div style="padding-top: 1rem">Event Firing History:</div>
          <ul id="events-list"></ul>
        </div>
        <div style="padding-bottom: 0.5rem">
          <div style="padding-top: 1rem">Event Firing History for six-input-value-change:</div>
          <ul id="events-list-value-change"></ul>
        </div>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-input-16',
  mounted() { 
          const nativeInput = document.getElementById('native-input');
          const inputEl = document.getElementById('events-input');
          const eventList = document.getElementById('events-list');
          const eventListValueChange = document.getElementById('events-list-value-change');
          const nativeEventList = document.getElementById('native-events-list');
          const eventSettingBtn = document.getElementById('event-setting-btn');

          const logEvent = (eventName, el, color) => (event) => {
            const value = event.target.value;
            el.innerHTML = `${el.innerHTML}<li><span style="font-weight: bold; color: ${color};">${eventName}:</span> ${value}</li>`;
          };
          inputEl.addEventListener('six-input-input', logEvent('input', eventList, 'blue'));
          inputEl.addEventListener('six-input-change', logEvent('change', eventList, 'red'));
          inputEl.addEventListener('six-input-blur', logEvent('blur', eventList, 'green'));
          inputEl.addEventListener('six-input-value-change', logEvent('value-change', eventListValueChange));

          nativeInput.addEventListener('input', logEvent('input', nativeEventList, 'blue'));
          nativeInput.addEventListener('change', logEvent('change', nativeEventList, 'red'));
          nativeInput.addEventListener('blur', logEvent('blur', nativeEventList, 'green'));

          eventSettingBtn.addEventListener('click', () => {
            const someString = 'dynamically set value';
            inputEl.value = someString;
            nativeInput.value = someString;
          });
         }
}
</script>