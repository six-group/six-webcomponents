<template>
<div>

        <div class="parent">
          <six-breadcrumbs>
            <six-icon slot="separator" size="small">arrow_forward</six-icon>
            <six-breadcrumbs-item>Home</six-breadcrumbs-item>
            <six-breadcrumbs-item>Page</six-breadcrumbs-item>
            <six-breadcrumbs-item>Current</six-breadcrumbs-item>
          </six-breadcrumbs>
        </div>

        
      
</div>
</template>
<style>

          .parent six-breadcrumbs-item {
            --separator-color: var(--six-color-web-rock-900);
            --last-item-color: var(--six-color-danger-900);
          }
          .parent {
            background-color: var(--six-color-web-rock-100);

            six-breadcrumbs-item::part(separator) {
              margin: 0 var(--six-spacing-large);
            }
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-breadcrumbs-4',
  mounted() {  }
}
</script>