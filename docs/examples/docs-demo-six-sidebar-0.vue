<template>
<div>

        <six-sidebar position="left" width="20rem" open>
          <six-sidebar-item-group icon="description" name="Upload" value="upload">
            <six-sidebar-item value="data" disabled="true">Data</six-sidebar-item>
            <six-sidebar-item value="history">History</six-sidebar-item>
            <six-sidebar-item-group icon="settings" name="Settings">
              <six-sidebar-item value="data" selected>Data</six-sidebar-item>
              <six-sidebar-item value="history">History</six-sidebar-item>
            </six-sidebar-item-group>
          </six-sidebar-item-group>
          <six-sidebar-item-group             icon="task"
            name="Tasks with very long title which wraps multiple lines but should still have the correct layout"
            value="tasks"
            summary-icon="settings"
          >
            <six-sidebar-item value="open">Open</six-sidebar-item>
            <six-sidebar-item value="closed">Closed</six-sidebar-item>
          </six-sidebar-item-group>
          <six-sidebar-item-group icon="ac_unit" name="3. Ownership Information and Management Structure">
            <b slot="summary-icon">99%</b>
            <six-sidebar-item value="controlling">
              3.1 Details of controlling person(s) - individual(s)
            </six-sidebar-item>
            <six-sidebar-item value="provision"
              >3.2 Please provide the names of the institutions Board of directors (all members)
            </six-sidebar-item>
            <six-sidebar-item value="managmeent">
              3.3 Please provide the names of the institutions Management Board (all members)
            </six-sidebar-item>
            <six-sidebar-item-group name="3.4 Settings">
              <six-sidebar-item value="long1" selected>
                3.4.1 This is also a very long string to check how it's displayed
              </six-sidebar-item>
              <six-sidebar-item value="long2" selected>
                3.4.2 This is also a very long string to check how it's displayed
              </six-sidebar-item>
            </six-sidebar-item-group>
          </six-sidebar-item-group>
          <six-sidebar-item-group icon="settings" name="Reclaims"></six-sidebar-item-group>
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
  name: 'docs-demo-six-sidebar-0',
  mounted() { 
          const getElements = (e) =>
            Object.entries(e).reduce(
              (e, [r, t]) => ({
                ...e,
                [r]: Array.isArray(t)
                  ? t.flatMap((s) => Array.from(document.querySelectorAll(s)))
                  : document.querySelector(t),
              }),
              {}
            );

          const Select = getElements({
            sidebar: 'six-sidebar',
            items: ['six-sidebar-item'],
            dialog: 'six-dialog',
            details: 'six-dialog pre',
            close: 'six-button[slot="footer"]',
          });

          const log = (el) => () => {
            Select.dialog.label = 'Click';
            Select.details.innerHTML = el.innerHTML;
            Select.dialog.show();
          };

          Select.items.forEach((item) => {
            item.addEventListener('click', log(item));
          });

          Select.close.addEventListener('click', () => {
            Select.dialog.hide();
          });
         }
}
</script>