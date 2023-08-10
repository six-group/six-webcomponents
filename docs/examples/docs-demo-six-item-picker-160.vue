<template>
<div class="demo my-app">

        <div style="display: flex">
          <six-item-picker type="letter"></six-item-picker>
          <six-item-picker type="letter" value="b" step="5"></six-item-picker>
          <six-item-picker type="letter" roundtrip="false"></six-item-picker>
          <six-item-picker type="letter" roundtrip="false" min="c" max="k" value="d"></six-item-picker>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-160',
  mounted() {  }
}
</script>