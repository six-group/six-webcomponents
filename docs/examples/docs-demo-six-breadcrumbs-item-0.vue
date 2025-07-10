<template>
<div>

        <p>Character / as separators</p>
        <six-breadcrumbs>
          <span slot="separator">/</span>
          <six-breadcrumbs-item>A</six-breadcrumbs-item>
          <six-breadcrumbs-item>B</six-breadcrumbs-item>
          <six-breadcrumbs-item>C</six-breadcrumbs-item>
        </six-breadcrumbs>

        <p>six-icon as separators and with a prefix</p>
        <six-breadcrumbs>
          <six-icon slot="separator" size="small">arrow_forward</six-icon>
          <six-breadcrumbs-item href="http://six-group.com" target="_blank">
            <six-icon slot="prefix" size="small">house</six-icon>
            Home
          </six-breadcrumbs-item>
          <six-breadcrumbs-item href="http://six-group.com" target="_blank">A</six-breadcrumbs-item>
          <six-breadcrumbs-item href="http://six-group.com" target="_blank">B</six-breadcrumbs-item>
          <six-breadcrumbs-item href="http://six-group.com" target="_blank">Current</six-breadcrumbs-item>
        </six-breadcrumbs>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-breadcrumbs-item-0',
  mounted() {  }
}
</script>