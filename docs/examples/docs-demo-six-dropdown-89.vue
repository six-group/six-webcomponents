<template>
<div class="demo my-app">

        <div class="dropdown-hoist">
          <six-dropdown>
            <six-button slot="trigger" caret>No Hoist</six-button>
            <six-menu>
              <six-menu-item>Item 1</six-menu-item>
              <six-menu-item>Item 2</six-menu-item>
              <six-menu-item>Item 3</six-menu-item>
            </six-menu>
          </six-dropdown>

          <six-dropdown hoist>
            <six-button slot="trigger" caret>Hoist</six-button>
            <six-menu>
              <six-menu-item>Item 1</six-menu-item>
              <six-menu-item>Item 2</six-menu-item>
              <six-menu-item>Item 3</six-menu-item>
            </six-menu>
          </six-dropdown>
        </div>

        
      
</div>
</template>
<style>

          .dropdown-hoist {
            border: solid 2px var(--six-panel-border-color);
            padding: var(--six-spacing-medium);
            overflow: hidden;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-dropdown-89',
  mounted() {  }
}
</script>