<template>
<div class="demo my-app">

        <div style="display: flex">
          <six-item-picker padded></six-item-picker>
          <six-item-picker padded padding-length="3"></six-item-picker>
          <six-item-picker padded padding-char="_"></six-item-picker>
          <six-item-picker padded padding-char="_" padding-direction="after"></six-item-picker>
          <div style="width: 2rem"></div>
          <six-item-picker             type="letter"
            padded
            padding-length="6"
            padding-char="_form"
            padding-direction="after"
          ></six-item-picker>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-item-picker-168',
  mounted() {  }
}
</script>