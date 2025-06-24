<template>
<div>

        <six-menu           style="
            max-width: 200px;
            border: solid 1px var(--six-panel-border-color);
            border-radius: var(--six-border-radius-medium);
          "
        >
          <six-menu-label>Fruits</six-menu-label>
          <six-menu-item value="apple">Apple</six-menu-item>
          <six-menu-item value="banana">Banana</six-menu-item>
          <six-menu-item value="orange">Orange</six-menu-item>
          <six-menu-divider></six-menu-divider>
          <six-menu-label>Vegetables</six-menu-label>
          <six-menu-item value="broccoli">Broccoli</six-menu-item>
          <six-menu-item value="carrot">Carrot</six-menu-item>
          <six-menu-item value="zucchini">Zucchini</six-menu-item>
        </six-menu>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-menu-label-0',
  mounted() {  }
}
</script>