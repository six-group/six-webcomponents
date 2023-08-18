<template>
<div class="demo my-app">

        <six-datepicker icon-position="right"></six-datepicker>
        <br>
        <six-datepicker icon-position="right" clearable></six-datepicker>
        <br>
        <six-datepicker icon-position="right" custom-icon clearable>
          <img             style="height: 24px"
            slot="custom-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1133px-Sketch_Logo.svg.png"
            alt="customicon"
          >
        </six-datepicker>
        
      
</div>
</template>
<style>

          six-datepicker {
            max-width: 25rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-54',
  mounted() {  }
}
</script>