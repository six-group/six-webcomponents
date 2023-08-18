<template>
<div class="demo my-app">

        <six-sidebar-item-group icon="description" name="Upload" value="upload">
          <b slot="summary-icon">99%</b>
          <six-sidebar-item value="data">Data</six-sidebar-item>
          <six-sidebar-item value="history">History</six-sidebar-item>
          <six-sidebar-item-group icon="settings" name="Settings">
            <six-sidebar-item value="data">Data</six-sidebar-item>
            <six-sidebar-item value="history">History</six-sidebar-item>
          </six-sidebar-item-group>
        </six-sidebar-item-group>
        <six-sidebar-item-group icon="task" name="Tasks" value="tasks">
          <six-sidebar-item value="open">Open</six-sidebar-item>
          <six-sidebar-item value="closed">Closed</six-sidebar-item>
        </six-sidebar-item-group>
        <six-sidebar-item-group icon="ac_unit" name="Transactions" value="transactions"></six-sidebar-item-group>
        <six-sidebar-item-group name="Reclaims" value="reclaims">
          <b slot="summary-icon">99%</b>
        </six-sidebar-item-group>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-sidebar-item-group-255',
  mounted() {  }
}
</script>