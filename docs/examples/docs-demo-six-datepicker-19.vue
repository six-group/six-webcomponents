<template>
<div>

        <div style="overflow: hidden; border: solid 1px grey; padding: 0.5em; display: flex">
          <six-datepicker placement="bottom" placeholder="no hoisting"></six-datepicker>
          <six-datepicker hoist placement="bottom" placeholder="with hoisting"></six-datepicker>
        </div>
        
      
</div>
</template>
<style>

          six-datepicker {
            max-width: 25rem;
            min-width: 10rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-19',
  mounted() {  }
}
</script>