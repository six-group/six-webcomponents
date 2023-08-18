<template>
<div class="demo my-app">

        <six-tooltip id="six-tooltip-disabled-example" content="This is a tooltip" disabled>
          <six-button>Hover Me</six-button>
        </six-tooltip>

        <div style="margin-top: 0.5rem">
          <six-switch id="tooltip-disable-switch">Tooltip Disabled</six-switch>
        </div>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-tooltip-323',
  mounted() { 
          const tooltip = document.getElementById('six-tooltip-disabled-example');
          const tooltipSwitch = document.getElementById('tooltip-disable-switch');

          tooltipSwitch.addEventListener('six-switch-change', ({ detail }) => {
            tooltipSwitch.innerText = detail ? 'Tooltip Enabled' : 'Tooltip Disabled';
            tooltip.disabled = !detail;
          });
         }
}
</script>