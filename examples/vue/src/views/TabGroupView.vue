<script setup lang="ts">
import { SixTabGroup, SixTab, SixTabPanel } from '@six-group/ui-library-vue';
import { ref } from 'vue';
</script>

<template>
  <h2>Tab Group</h2>

  <six-tab-group>
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
</template>

<style scoped>
h2 {
  margin-top: 0;
}
</style>
