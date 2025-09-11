<template>
<div>

        <six-button type="secondary" id="set-value-button">Set Value</six-button>
        <six-date id="set-value-date" label="Date with initial value" value="2025-01-15"></six-date>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-date-1',
  mounted() { 
          (() => {
            const openButton = document.getElementById('set-value-button');
            const dateComponent = document.getElementById('set-value-date');
            openButton.addEventListener('click', () => (dateComponent.value = '2030-01-01'));
          })();
         }
}
</script>