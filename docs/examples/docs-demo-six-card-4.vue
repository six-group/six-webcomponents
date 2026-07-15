<template>
<div>

        <h3>Card Buttons</h3>
        <div style="max-width: 400px; margin: auto">
          <six-card shadow>
            <h2 slot="header">Card Title</h2>
            <h3 slot="header">Card Subtitle</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <six-button slot="footer-actions" type="secondary">Action 1</six-button>
            <six-button slot="footer-actions" type="primary">Primary Action</six-button>
          </six-card>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-card-4',
  mounted() {  }
}
</script>