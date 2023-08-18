<template>
<div class="demo my-app">

        <div style="display: flex">
          <six-item-picker value="12" min="0" max="13"></six-item-picker>
          <six-item-picker value="12" min="-5" max="0"></six-item-picker>
          <six-item-picker value="12" min="10" max="13"></six-item-picker>
          <six-item-picker type="letter" value="k" min="i" max="m"></six-item-picker>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-154',
  mounted() {  }
}
</script>