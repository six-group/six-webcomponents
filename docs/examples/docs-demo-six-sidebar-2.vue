<template>
<div>

        <div id="sidebar-programmatic-buttonbar" style="margin-bottom: 1em">
          <div style="margin-bottom: 1em">
            <six-button>Select A by index</six-button>
            <six-button>Select B by index</six-button>
            <six-button>Select C by index</six-button>
          </div>
          <div>
            <six-button>Select A by value</six-button>
            <six-button>Select B by value</six-button>
            <six-button>Select C by value</six-button>
          </div>
        </div>

        <six-sidebar id="sidebar-programmatic-example" position="left" width="20rem" toggled open style="height: 12em">
          <six-sidebar-item-group icon="description" name="Section A" value="sectionA">
            <six-sidebar-item value="data" disabled="true">Aa</six-sidebar-item>
            <six-sidebar-item value="history">Ab</six-sidebar-item>
            <six-sidebar-item-group icon="settings" name="Ad">
              <six-sidebar-item value="data" selected>Ada</six-sidebar-item>
              <six-sidebar-item value="history">Adb</six-sidebar-item>
            </six-sidebar-item-group>
            <six-sidebar-item-group icon="settings" name="Ae"></six-sidebar-item-group>
          </six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section B" value="sectionB">
            <six-sidebar-item value="data" disabled="true">Ba</six-sidebar-item>
            <six-sidebar-item value="history">Bb</six-sidebar-item>
            <six-sidebar-item-group icon="settings" name="Bc">
              <six-sidebar-item value="data" selected>Bca</six-sidebar-item>
              <six-sidebar-item value="history">Bcb</six-sidebar-item>
            </six-sidebar-item-group>
          </six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section filler"></six-sidebar-item-group>
          <six-sidebar-item-group icon="settings" name="Section C"
            ><b slot="summary-icon">99%</b></six-sidebar-item-group>
        </six-sidebar>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-sidebar-2',
  mounted() { 
          const sidebar = document.getElementById('sidebar-programmatic-example');
          const [buttonAIdx, buttonBIdx, buttonCIdx, buttonAVal, buttonBVal, buttonCVal] = document
            .getElementById('sidebar-programmatic-buttonbar')
            .querySelectorAll('six-button');

          buttonAIdx.onclick = () => {
            sidebar.selectItemByIndex(0);
          };

          buttonBIdx.onclick = () => {
            sidebar.selectItemByIndex(19);
          };

          buttonCIdx.onclick = () => {
            sidebar.selectItemByIndex(38);
          };

          buttonAVal.onclick = () => {
            sidebar.selectItemByName('Section A');
          };

          buttonBVal.onclick = () => {
            sidebar.selectItemByName('Section B');
          };

          buttonCVal.onclick = () => {
            sidebar.selectItemByName('Section C');
          };
         }
}
</script>