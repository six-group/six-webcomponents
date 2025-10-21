<template>
<div>

      <six-select filter placeholder="Select a few" multiple clearable>
        <six-menu-item value="option-1">Option 1
          <six-icon-button size="small" slot="suffix" name="favorite"></six-icon-button>
        </six-menu-item>
        <six-menu-item value="option-2">Option 2 <six-icon-button size="small" slot="suffix"
            name="favorite"></six-icon-button></six-menu-item>
        <six-menu-item value="option-3">Option 3
          <six-icon-button size="small" slot="suffix" name="favorite"></six-icon-button>
        </six-menu-item>
      </six-select>
    
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-9',
  mounted() {  }
}
</script>