<template>
<div>

        <six-card style="max-width: 400px">
          <img             slot="media"
            src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCA1MTInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMjQnIGhlaWdodD0nNTEyJyBmaWxsPScjY2NjY2NjJyAvPjwvc3ZnPg=="
            alt="Grey placeholder"
          >
          <h3 slot="header">Card Title</h3>
          <p slot="header">Card Subtitle</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <six-icon-button slot="footer" name="share" size="small" label="Share"></six-icon-button>
          <six-icon-button slot="footer" name="edit" size="small" label="Edit"></six-icon-button>
          <six-icon-button slot="footer" name="delete" size="small" label="Delete"></six-icon-button>
          <six-button slot="footer-actions" type="primary">Open</six-button>
        </six-card>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-card-6',
  mounted() {  }
}
</script>