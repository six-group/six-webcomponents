<template>
<div class="demo my-app">

        <div style="display: flex">
          <six-item-picker type="capital-letter"></six-item-picker>
          <six-item-picker type="capital-letter" value="B" step="5"></six-item-picker>
          <six-item-picker type="capital-letter" roundtrip="false"></six-item-picker>
          <six-item-picker type="capital-letter" roundtrip="false" min="C" max="K" value="D"></six-item-picker>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-163',
  mounted() {  }
}
</script>