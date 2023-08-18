<template>
<div class="demo my-app">

        <six-tab-group class="tab-group-with-line">
          <six-tab slot="nav" panel="general">General</six-tab>
          <six-tab slot="nav" panel="custom">Custom</six-tab>
          <six-tab slot="nav" panel="advanced">Advanced</six-tab>
          <six-tab slot="nav" panel="disabled" disabled>Disabled</six-tab>

          <six-tab-panel name="general">This is the general tab panel.</six-tab-panel>
          <six-tab-panel name="custom">This is the custom tab panel.</six-tab-panel>
          <six-tab-panel name="advanced">This is the advanced tab panel.</six-tab-panel>
          <six-tab-panel name="disabled">This is a disabled tab panel.</six-tab-panel>
        </six-tab-group>

        
      
</div>
</template>
<style>

          .tab-group-with-line::part(tabs) {
            border-bottom: solid 2px #f1f1f1;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-tab-group-269',
  mounted() {  }
}
</script>