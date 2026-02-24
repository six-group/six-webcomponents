<template>
<div>

        <six-paginator total-pages="12" total-results="640">
          <div slot="left">
            <strong>Some custom content to the left</strong>
          </div>

          <div slot="right">It can be anything you want! A nice icon for example? <six-icon>house</six-icon></div>
        </six-paginator>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-paginator-6',
  mounted() {  }
}
</script>