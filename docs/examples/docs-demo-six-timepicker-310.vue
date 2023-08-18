<template>
<div class="demo my-app">

        <div style="overflow: hidden; border: solid 1px grey; padding: 0.5em; display: flex">
          <six-timepicker placement="bottom" placeholder="no hoisting"></six-timepicker>
          <six-timepicker hoist placement="bottom" placeholder="with hoisting"></six-timepicker>
        </div>
        
      
</div>
</template>
<style>

          six-timepicker {
            max-width: 15rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-timepicker-310',
  mounted() {  }
}
</script>