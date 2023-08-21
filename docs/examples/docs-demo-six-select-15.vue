<template>
<div>

        <div style="overflow: hidden; border: solid 1px grey; padding: 0.5em; display: flex">
          <six-select placeholder="No Hoisting" style="width: 10em">
            <six-menu-item value="option-1">Novice</six-menu-item>
            <six-menu-item value="option-2">Intermediate</six-menu-item>
            <six-menu-item value="option-3">Advanced</six-menu-item>
          </six-select>

          <six-select placeholder="Hoisting" filter="true" hoist style="width: 10em">
            <six-menu-item value="option-1">Novice</six-menu-item>
            <six-menu-item value="option-2">Intermediate</six-menu-item>
            <six-menu-item value="option-3">Advanced</six-menu-item>
          </six-select>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-15',
  mounted() {  }
}
</script>