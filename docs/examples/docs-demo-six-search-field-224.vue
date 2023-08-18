<template>
<div class="demo my-app">

        <six-search-field placeholder="Search" id="basic-search-field">
          <div id="search-results"></div>
        </six-search-field>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-search-field-224',
  mounted() { 
          const basicSearchField = document.getElementById('basic-search-field');
          const searchResultsBox = document.getElementById('search-results');

          basicSearchField.addEventListener('six-search-field-change', (event) => {
            searchResultsBox.innerHTML = event.detail.value;
            searchResultsBox.style.padding = '1em';
          });
         }
}
</script>