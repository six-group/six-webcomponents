<template>
<div>

        <div style="display: flex">
          <six-item-picker value="12" min="10" max="13" roundtrip="false"></six-item-picker>
          <six-item-picker value="12" min="10" roundtrip="false"></six-item-picker>
          <six-item-picker value="12" max="13" roundtrip="false"></six-item-picker>
          <six-item-picker type="letter" value="k" min="i" max="m" roundtrip="false"></six-item-picker>
        </div>

        <div style="display: flex"></div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-2',
  mounted() {  }
}
</script>