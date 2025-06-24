<template>
<div>

        <six-error-page custom-title="my title" id="custom-error-message" custom-icon="home"></six-error-page>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-error-page-3',
  mounted() { 
          const sixErrorPage = document.getElementById('custom-error-message');
          sixErrorPage.customDescription = ['My', 'Description'];
         }
}
</script>