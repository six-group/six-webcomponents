<template>
<div class="demo my-app">

        <div style="max-width: 10rem; margin-bottom: 2.5rem">
          <div style="font-weight: bold">With box-shadow (showing ugly artefact)</div>
          <div style="overflow: auto">
            <six-menu>
              <six-menu-item value="val1">some quite long or even very long label</six-menu-item>
            </six-menu>
          </div>
        </div>
        <div style="max-width: 10rem">
          <div style="font-weight: bold">Without box-shadow (no artefact)</div>
          <div style="overflow: auto">
            <six-menu remove-box-shadow>
              <six-menu-item value="val1">some quite long or even very long label</six-menu-item>
            </six-menu>
          </div>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-menu-183',
  mounted() {  }
}
</script>