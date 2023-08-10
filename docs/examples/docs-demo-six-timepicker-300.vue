<template>
<div class="demo my-app">

        <six-timepicker></six-timepicker>
        <br>
        <six-timepicker timeout="500" interval="150"></six-timepicker>
        <br>
        <six-timepicker timeout="0" interval="1"></six-timepicker>
        
      
</div>
</template>
<style>

          six-timepicker {
            max-width: 15rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-timepicker-300',
  mounted() {  }
}
</script>