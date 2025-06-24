<template>
<div>

        <six-header>
          <six-header-dropdown-item>
            <six-header-menu-button slot="trigger"
              >App 1 <six-icon slot="suffix">apps</six-icon></six-header-menu-button>
            <six-menu>
              <six-menu-item checked>App 1</six-menu-item>
              <six-menu-item>App 2</six-menu-item>
              <six-menu-item>App 3</six-menu-item>
            </six-menu>
          </six-header-dropdown-item>
        </six-header>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-header-menu-button-0',
  mounted() { 
          const menuItems = document.querySelectorAll('six-menu-item');
          const headerButton = document.querySelector('six-header-menu-button');

          menuItems.forEach((item) => {
            item.addEventListener('click', () => {
              headerButton.innerText = this.innerText;
              menuItems.forEach((item) => (item.checked = false));
              item.checked = true;
            });
          });
         }
}
</script>