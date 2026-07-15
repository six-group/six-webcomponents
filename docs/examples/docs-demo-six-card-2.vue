<template>
<div>

        <h3>Header Icon</h3>
        <div style="max-width: 400px; margin: auto">
          <six-card>
            <h2 slot="header">Card Title</h2>
            <h3 slot="header">Card Subtitle</h3>
            <six-icon slot="header-actions" name="headset" size="large"></six-icon>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </six-card>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-card-2',
  mounted() {  }
}
</script>