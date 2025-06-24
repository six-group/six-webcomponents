<template>
<div>

        <div class="icon-button-color">
          <six-icon-button name="format_bold" label="Bold"></six-icon-button>
          <six-icon-button name="format_italic" label="Italic"></six-icon-button>
          <six-icon-button name="format_underline" label="Underline"></six-icon-button>
        </div>

        
      
</div>
</template>
<style>

          .icon-button-color six-icon-button::part(base) {
            color: #b00091;
          }

          .icon-button-color six-icon-button::part(base):hover,
          .icon-button-color six-icon-button::part(base):focus {
            color: #c913aa;
          }

          .icon-button-color six-icon-button::part(base):active {
            color: #960077;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-icon-button-3',
  mounted() {  }
}
</script>