<template>
<div class="demo my-app">

        <six-select id="virtual-autocomplete-example" autocomplete clearable virtual-scroll></six-select>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-246',
  mounted() { 
          const virtualAutocomplete = document.getElementById('virtual-autocomplete-example');

          // generate some options
          const allOptions = Array.from(Array(10000).keys()).map((idx) => ({
            label: `label ${idx}`,
            value: `value ${idx}`,
          }));

          // assign the options to the six-select
          virtualAutocomplete.options = allOptions;

          // set up an eventlistener on change
          virtualAutocomplete.addEventListener('six-select-change', (event) => {
            if (event.detail.isSelected) {
              // don't fetch new values on selection
              return;
            }

            const enteredText = event.detail.value;
            if (!enteredText) {
              // if no text has been entered all options should be available
              virtualAutocomplete.options = allOptions;
            }

            // otherwise if a text has been entered filter for all options which contain the entered text
            virtualAutocomplete.options = allOptions.filter(
              (option) => option.label.includes(enteredText) || option.value.includes(enteredText)
            );
          });
         }
}
</script>