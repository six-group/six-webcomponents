<template>
<div>

        <div style="display: flex">
          <six-item-picker type="lower-letter"></six-item-picker>
          <six-item-picker type="lower-letter" value="b" step="5"></six-item-picker>
          <six-item-picker type="lower-letter" roundtrip="false"></six-item-picker>
          <six-item-picker type="lower-letter" roundtrip="false" min="c" max="k" value="d"></six-item-picker>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-9',
  mounted() {  }
}
</script>