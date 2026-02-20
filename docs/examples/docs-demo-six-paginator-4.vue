<template>
<div>

        <six-paginator id="paginator-options" total-pages="15" total-results="500" results-per-page="50">
        </six-paginator>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-paginator-4',
  mounted() { 
          const paginatorOptions = document.getElementById('paginator-options');
          paginatorOptions.resultsPerPageOptions = ['10', '20', '50', '100'];
         }
}
</script>