<template>
<div>

        
        <six-picto class="success">search</six-picto>
        <six-picto class="warning">copy</six-picto>
        <six-picto class="danger">movie-camera</six-picto>
      
</div>
</template>
<style>

          .success::part(icon) {
            background-color: green;
          }
          .warning::part(icon) {
            background-color: orange;
          }
          .danger::part(icon) {
            background-color: red;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-picto-10',
  mounted() {  }
}
</script>