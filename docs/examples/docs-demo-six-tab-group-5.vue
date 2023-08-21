<template>
<div>

        <six-tab-group class="tabs-closable">
          <six-tab slot="nav" panel="general">General</six-tab>
          <six-tab slot="nav" panel="closable-1" closable>Closable 1</six-tab>
          <six-tab slot="nav" panel="closable-2" closable>Closable 2</six-tab>
          <six-tab slot="nav" panel="closable-3" closable>Closable 3</six-tab>

          <six-tab-panel name="general">This is the general tab panel.</six-tab-panel>
          <six-tab-panel name="closable-1">This is the first closable tab panel.</six-tab-panel>
          <six-tab-panel name="closable-2">This is the second closable tab panel.</six-tab-panel>
          <six-tab-panel name="closable-3">This is the third closable tab panel.</six-tab-panel>
        </six-tab-group>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-tab-group-5',
  mounted() { 
          const tabGroup = document.querySelector('.tabs-closable');

          tabGroup.addEventListener('six-close', async (event) => {
            const tab = event.target;
            const panel = tabGroup.querySelector(`six-tab-panel[name="${tab.panel}"]`);

            // Show the previous tab if the tab is currently active
            if (tab.active) {
              tabGroup.show(tab.previousElementSibling.panel);
            }

            // Remove the tab + panel
            tab.remove();
            panel.remove();
          });
         }
}
</script>