<template>
<div class="demo my-app">

        
      
</div>
</template>
<style>

          six-main-container {
            background-color: var(--six-color-web-rock-100);
          }
          six-main-container.show-margin::part(left-margin),
          six-main-container.show-margin::part(right-margin) {
            background-color: rgba(106, 227, 0, 0.1);
          }
          six-main-container::part(content) {
            line-height: 200px;
          }
          six-main-container > div {
            text-align: center;
            background-color: rgba(33, 150, 243, 0.1);
            border: 1px solid #000;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-main-container-181',
  mounted() {  }
}
</script>