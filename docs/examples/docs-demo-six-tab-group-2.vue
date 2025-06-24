<template>
<div>

        <six-tab-group placement="bottom">
          <six-tab slot="nav" panel="general">General</six-tab>
          <six-tab slot="nav" panel="custom">Custom</six-tab>
          <six-tab slot="nav" panel="advanced">Advanced</six-tab>
          <six-tab slot="nav" panel="disabled" disabled>Disabled</six-tab>

          <six-tab-panel style="background-color: var(--six-color-web-rock-100)" name="general">
            This is the general tab panel.
          </six-tab-panel>
          <six-tab-panel style="background-color: var(--six-color-web-rock-100)" name="custom">
            This is the custom tab panel.
          </six-tab-panel>
          <six-tab-panel style="background-color: var(--six-color-web-rock-100)" name="advanced">
            This is the advanced tab panel.
          </six-tab-panel>
          <six-tab-panel style="background-color: var(--six-color-web-rock-100)" name="disabled">
            This is a disabled tab panel.
          </six-tab-panel>
        </six-tab-group>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-tab-group-2',
  mounted() {  }
}
</script>