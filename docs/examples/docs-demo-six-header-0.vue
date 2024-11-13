<template>
<div>

        <six-header slot="header" custom>
          
          <six-header-item>
            <six-icon-button href="https://six-group.github.io/six-webcomponents/">
              <six-logo></six-logo>
            </six-icon-button>
          </six-header-item>

          
          <six-header-dropdown-item style="margin-left: auto">
            <six-icon-button slot="trigger">
              <six-avatar                 image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              >
              </six-avatar>
            </six-icon-button>
            <six-menu>
              <six-menu-item>Logout</six-menu-item>
            </six-menu>
          </six-header-dropdown-item>
        </six-header>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-header-0',
  mounted() {  }
}
</script>