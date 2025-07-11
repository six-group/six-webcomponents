<template>
<div>

        <six-rating id="multiple-error-text" label="List of string message" invalid></six-rating>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-rating-8',
  mounted() { 
          const sixRating = document.getElementById('multiple-error-text');
          sixRating.errorText = ['Message 1', 'Message 2'];
          sixRating.errorTextCount = 3;
         }
}
</script>