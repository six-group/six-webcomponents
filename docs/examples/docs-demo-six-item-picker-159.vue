<template>
<div class="demo my-app">

        <div style="display: flex">
          <six-item-picker></six-item-picker>
          <six-item-picker value="1" step="2"></six-item-picker>
          <six-item-picker roundtrip="false"></six-item-picker>
          <six-item-picker value="5" step="5" min="3" max="13"></six-item-picker>
          <six-item-picker value="5" step="5" min="3" max="13" roundtrip="false"></six-item-picker>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-159',
  mounted() {  }
}
</script>