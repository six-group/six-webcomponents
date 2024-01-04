<template>
<div>

        

        <div class="spinner-demo">
          <six-spinner></six-spinner>
          <six-spinner style="font-size: 2rem"></six-spinner>
          <six-spinner style="font-size: 5rem"></six-spinner>
        </div>

        <div class="spinner-demo">
          <six-spinner six="true"></six-spinner>
          <six-spinner id="medium" six="true"></six-spinner>
          <six-spinner id="large" six="true"></six-spinner>
        </div>
      
</div>
</template>
<style>

          .spinner-demo {
            margin-bottom: 2.5rem;
          }

          six-spinner#medium::part(svg) {
            margin-left: 0.5rem;
            width: 3.5rem;
            height: 3.5rem;
          }

          six-spinner#large::part(svg) {
            margin-left: 2.5rem;
            width: 5rem;
            height: 5rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-spinner-1',
  mounted() {  }
}
</script>