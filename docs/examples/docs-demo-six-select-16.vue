<template>
<div>

        <six-button id="hoistingDrawerBtn">Open Drawer</six-button>
        <six-drawer id="hoistingDrawer" label="Drawer" class="drawer-overview">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <six-button slot="footer">Close</six-button>
          <div class="demo" style="width: 300px">
            <six-tooltip content="something">
              <div>some tooltip</div>
            </six-tooltip>
            <div style="overflow: hidden; border: solid 1px grey; padding: 0.5em; display: flex">
              <six-select placeholder="No Hoisting" style="width: 10em">
                <six-tooltip content="something">
                  <six-menu-item value="option-1">Novice</six-menu-item>
                </six-tooltip>
                <six-menu-item value="option-2">Intermediate</six-menu-item>
                <six-menu-item value="option-3">Advanced</six-menu-item>
              </six-select>

              <six-select placeholder="Hoisting" hoist style="width: 10em">
                <six-menu-item value="option-1">Novice</six-menu-item>
                <six-menu-item value="option-2">Intermediate</six-menu-item>
                <six-menu-item value="option-3">Advanced</six-menu-item>
              </six-select>
            </div>

            <div style="overflow: hidden; border: solid 1px grey; padding: 0.5em; display: flex">
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
        </six-drawer>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-16',
  mounted() { 
          const sixDrawerBtn = document.querySelector('#hoistingDrawerBtn');
          const sixDrawer = document.querySelector('#hoistingDrawer');
          sixDrawerBtn.addEventListener('click', () => (sixDrawer.open = true));
         }
}
</script>