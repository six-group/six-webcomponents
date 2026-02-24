<template>
<div>

        <six-paginator           total-pages="8"
          total-results="200"
          onchange="console.log(event)"
          id="events-example"
        ></six-paginator>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-paginator-7',
  mounted() { 
          const paginator = document.getElementById('events-example');
          paginator.addEventListener('six-paginator-page-changed', (event) => {
            console.log('Page changed event fired', event.detail);
          });
          paginator.addEventListener('six-paginator-results-per-page-changed', (event) => {
            console.log('Results per page changed event fired', event.detail);
          });
         }
}
</script>