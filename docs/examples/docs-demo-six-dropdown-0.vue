<template>
<div>

        <six-dropdown>
          <six-avatar             image="https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1792&q=80"
            slot="trigger"
          ></six-avatar>
          <six-menu>
            <six-menu-item>Dropdown Item 1</six-menu-item>
            <six-menu-item>Dropdown Item 2</six-menu-item>
            <six-menu-item>Dropdown Item 3</six-menu-item>
            <six-menu-divider></six-menu-divider>
            <six-menu-item checked>Checked</six-menu-item>
            <six-menu-item disabled>Disabled</six-menu-item>
            <six-menu-divider></six-menu-divider>
            <six-menu-item>
              Prefix
              <six-icon slot="prefix">favorite</six-icon>
            </six-menu-item>
            <six-menu-item>
              Suffix Icon
              <six-icon slot="suffix">face</six-icon>
            </six-menu-item>
          </six-menu>
        </six-dropdown>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dropdown-0',
  mounted() {  }
}
</script>