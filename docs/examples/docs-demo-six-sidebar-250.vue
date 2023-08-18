<template>
<div class="demo my-app">

        <six-sidebar position="left" width="20rem" toggled open>
          <six-sidebar-item-group icon="description" name="Section A" value="upload">
            <six-sidebar-item value="data" disabled="true">Aa</six-sidebar-item>
            <six-sidebar-item value="history">Ab</six-sidebar-item>
            <six-sidebar-item-group icon="settings" name="Ac">
              <six-sidebar-item value="data" selected>Aca</six-sidebar-item>
              <six-sidebar-item value="history">Acb</six-sidebar-item>
              <six-sidebar-item-group icon="description" name="Acc" value="upload">
                <six-sidebar-item value="data" disabled="true">Acca</six-sidebar-item>
                <six-sidebar-item value="history">Accb</six-sidebar-item>
                <six-sidebar-item-group icon="settings" name="Accc">
                  <six-sidebar-item value="data" selected>Acca</six-sidebar-item>
                  <six-sidebar-item value="history">Accb</six-sidebar-item>
                </six-sidebar-item-group>
                <six-sidebar-item-group icon="settings" name="Ad">
                  <six-sidebar-item value="data" selected>Ada</six-sidebar-item>
                  <six-sidebar-item value="history">Adb</six-sidebar-item>
                </six-sidebar-item-group>
                <six-sidebar-item-group icon="settings" name="Ae">
                  <six-sidebar-item value="data" selected>Aea</six-sidebar-item>
                  <six-sidebar-item value="history">Aeb</six-sidebar-item>
                </six-sidebar-item-group>
              </six-sidebar-item-group>
            </six-sidebar-item-group>
            <six-sidebar-item-group icon="settings" name="Ad">
              <six-sidebar-item value="data" selected>Ada</six-sidebar-item>
              <six-sidebar-item value="history">Adb</six-sidebar-item>
            </six-sidebar-item-group>
            <six-sidebar-item-group icon="settings" name="Ae"></six-sidebar-item-group>
          </six-sidebar-item-group>
          <six-sidebar-item-group icon="description" name="Section B" value="upload">
            <six-sidebar-item value="data" disabled="true">Ba</six-sidebar-item>
            <six-sidebar-item value="history">Bb</six-sidebar-item>
            <six-sidebar-item-group icon="settings" name="Bc">
              <six-sidebar-item value="data" selected>Bca</six-sidebar-item>
              <six-sidebar-item value="history">Bcb</six-sidebar-item>
            </six-sidebar-item-group>
          </six-sidebar-item-group>
          <six-sidebar-item-group icon="settings" name="Reclaims"
            ><b slot="summary-icon">99%</b></six-sidebar-item-group>
        </six-sidebar>

        <six-dialog label="Dialog" class="dialog-overview">
          <pre></pre>
          <six-button slot="footer" type="primary">Close</six-button>
        </six-dialog>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-sidebar-250',
  mounted() {  }
}
</script>