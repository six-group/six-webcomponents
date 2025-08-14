<template>
<div>

        <six-header>
          
          <six-header-item>
            <six-icon-button name="menu"></six-icon-button>
          </six-header-item>

          
          <six-header-item>
            <six-icon-button href="">
              <six-logo></six-logo>
            </six-icon-button>
          </six-header-item>

          
          <six-header-item style="flex: 1 0 0">
            <six-select value="option-1" style="width: 100%">
              <six-menu-item value="option-1">Option 1</six-menu-item>
              <six-menu-item value="option-2">Option 2</six-menu-item>
              <six-menu-item value="option-3">Option 3</six-menu-item>
            </six-select>
          </six-header-item>

          
          <six-header-item id="search-header-item">
            <six-icon-button name="search"></six-icon-button>
          </six-header-item>

          
          <six-header-item>
            <six-icon-button name="notifications_none">
              <six-badge type="danger" pill>2</six-badge>
            </six-icon-button>
          </six-header-item>

          
          <six-header-dropdown-item>
            <six-header-menu-button slot="trigger" icon="apps">Custody</six-header-menu-button>
            <six-menu>
              <six-menu-item checked>Custody</six-menu-item>
              <six-menu-item>Swiss Interbank Clearing</six-menu-item>
              <six-menu-item>Tri-Party Agent</six-menu-item>
              <six-menu-item>Financial Information</six-menu-item>
            </six-menu>
          </six-header-dropdown-item>

          
          <six-header-dropdown-item>
            <six-icon-button slot="trigger">
              <six-avatar                 image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              >
              </six-avatar>
            </six-icon-button>
            <six-menu>
              <six-menu-item><b>Cat Kittens</b><br>cat.kitty.kittens@themCatsBeCool.com</six-menu-item>
              <six-menu-item><b>Language</b><br><six-language-switcher></six-language-switcher></six-menu-item>
              <six-menu-item>Change password</six-menu-item>
              <six-menu-item>Logout</six-menu-item>
            </six-menu>
          </six-header-dropdown-item>
        </six-header>
        <div></div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-header-1',
  mounted() {  }
}
</script>