<template>
<div class="demo my-app">

        <div class="details-icon-size-example-2">
          <six-details summary="Toggle Me" summary-icon-size="inherit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </six-details>
        </div>

        
      
</div>
</template>
<style>

          .details-icon-size-example-2 six-details::part(header) {
            font-size: var(--six-font-size-xx-large);
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-details-65',
  mounted() {  }
}
</script>