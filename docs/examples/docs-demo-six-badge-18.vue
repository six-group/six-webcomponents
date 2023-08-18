<template>
<div class="demo my-app">

        <six-menu           style="
            max-width: 240px;
            border: solid 1px var(--six-panel-border-color);
            border-radius: var(--six-border-radius-medium);
          "
        >
          <six-menu-label>Messages</six-menu-label>
          <six-menu-item>Comments <six-badge slot="suffix" pill>4</six-badge></six-menu-item>
          <six-menu-item>Replies <six-badge slot="suffix" pill>12</six-badge></six-menu-item>
        </six-menu>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-badge-18',
  mounted() {  }
}
</script>