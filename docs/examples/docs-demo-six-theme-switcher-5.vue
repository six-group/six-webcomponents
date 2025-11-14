<template>
<div>

        <div style="border: 1px solid var(--six-color-web-rock-300); border-radius: 4px">
          <six-root>
            <six-header slot="header">
              <six-header-item>
                <six-icon-button name="menu"></six-icon-button>
              </six-header-item>

              <six-header-item>
                <six-logo></six-logo>
              </six-header-item>

              <six-header-item style="margin-left: auto">
                <six-theme-switcher></six-theme-switcher>
              </six-header-item>

              <six-header-item>
                <six-icon-button name="settings"></six-icon-button>
              </six-header-item>
            </six-header>
          </six-root>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-theme-switcher-5',
  mounted() {  }
}
</script>