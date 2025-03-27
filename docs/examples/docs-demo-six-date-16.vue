<template>
<div>

        <six-date icon-position="right"></six-date>
        <br>
        <six-date icon-position="right" clearable></six-date>
        <br>
        <six-date icon-position="right" custom-icon clearable>
          <img             style="height: 24px"
            slot="custom-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1133px-Sketch_Logo.svg.png"
            alt="customicon"
          >
        </six-date>
        
      
</div>
</template>
<style>

          six-date {
            max-width: 25rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-date-16',
  mounted() {  }
}
</script>