<template>
<div class="demo my-app">

        <div class="dropdown-selection">
          <six-dropdown>
            <six-avatar               image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              slot="trigger"
            ></six-avatar>
            <six-menu>
              <six-menu-item value="cut">Cut</six-menu-item>
              <six-menu-item value="copy">Copy</six-menu-item>
              <six-menu-item value="paste">Paste</six-menu-item>
            </six-menu>
          </six-dropdown>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-dropdown-92',
  mounted() {  }
}
</script>