<template>
<div>

        <six-card style="max-width: 400px">
          <h3 slot="header">Card Title</h3>
          <p slot="header">Card Subtitle</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <six-button slot="footer-actions" type="secondary">Cancel</six-button>
          <six-button slot="footer-actions" type="primary">Save</six-button>
        </six-card>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-card-5',
  mounted() {  }
}
</script>