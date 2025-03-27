<template>
<div>

        <div style="overflow: hidden; border: solid 1px grey; padding: 0.5em; display: flex">
          <six-date placement="bottom" placeholder="no hoisting"></six-date>
          <six-date hoist placement="bottom" placeholder="with hoisting"></six-date>
        </div>
        
      
</div>
</template>
<style>

          six-date {
            max-width: 25rem;
            min-width: 10rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-date-19',
  mounted() {  }
}
</script>