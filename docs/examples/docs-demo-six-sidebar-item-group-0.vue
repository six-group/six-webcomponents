<template>
<div>

        <div style="max-width: 20rem; padding: 1rem">
          <six-sidebar-item-group icon="description" name="Upload" value="upload">
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
            <six-sidebar-item value="link" href="http://www.google.ch">Link</six-sidebar-item>
          </six-sidebar-item-group>
          <six-sidebar-item-group icon="ac_unit" name="Transactions" value="transactions"></six-sidebar-item-group>
          <six-sidebar-item-group name="Reclaims" value="reclaims"></six-sidebar-item-group>
          <six-sidebar-item-group icon="search" name="Search" href="http://www.google.ch"></six-sidebar-item-group>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-sidebar-item-group-0',
  mounted() {  }
}
</script>