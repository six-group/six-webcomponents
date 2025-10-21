<template>
<div>

      <six-select label="Example using the no-data-text prop" no-data-text="No options available"></six-select>

      <six-select label="Example using the no-data-text slot">
        <div slot="no-data-text" style="padding: 0.5rem 0; opacity: 0.7">
          <h4 style="margin: 0 0 0.25rem 0">No Data</h4>
          <small>No options are currently available</small>
          <six-icon library="material-symbols">folder_open</six-icon>
        </div>
      </six-select>
    
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-10',
  mounted() {  }
}
</script>