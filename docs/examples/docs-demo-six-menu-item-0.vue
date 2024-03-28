<template>
<div>

        <six-menu           style="
            max-width: 200px;
            border: solid 1px var(--six-panel-border-color);
            border-radius: var(--six-border-radius-medium);
          "
        >
          <six-menu-item>Option 1</six-menu-item>
          <six-menu-item>Option 2</six-menu-item>
          <six-menu-item>Option 3</six-menu-item>
          <six-menu-divider></six-menu-divider>
          <six-menu-item disabled>Disabled</six-menu-item>
          <six-menu-divider></six-menu-divider>
          <six-menu-item>
            Prefix Icon
            <six-icon size="small" slot="prefix">favorite</six-icon>
          </six-menu-item>
          <six-menu-item>
            Suffix Icon
            <six-icon size="small" slot="suffix">face</six-icon>
          </six-menu-item>
        </six-menu>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-menu-item-0',
  mounted() {  }
}
</script>