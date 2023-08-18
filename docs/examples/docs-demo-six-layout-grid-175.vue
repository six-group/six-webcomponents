<template>
<div class="demo my-app">

        <six-layout-grid columns="6">
          <div>Col 1</div>
          <div>Col 2</div>
          <div style="grid-column: span 4">Col 3 - 6</div>
          <div>Col 1</div>
          <div style="grid-column: span 5">Col 2 - 6</div>
        </six-layout-grid>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-layout-grid-175',
  mounted() {  }
}
</script>