<template>
<div>

        <h3>Footer with Icon Buttons and Action</h3>
        <div style="max-width: 400px; margin: auto">
          <six-card>
            <img               slot="media"
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCA1MTInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwMjQnIGhlaWdodD0nNTEyJyBmaWxsPScjY2NjY2NjJyAvPjwvc3ZnPg=="
              alt="Grey placeholder"
            >
            <h2 slot="header">Card Title</h2>
            <h3 slot="header">Card Subtitle</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <six-icon-button slot="footer" name="share" size="small" label="Share"></six-icon-button>
            <six-icon-button slot="footer" name="edit" size="small" label="Edit"></six-icon-button>
            <six-icon-button slot="footer" name="delete" size="small" label="Delete"></six-icon-button>
            <six-button slot="footer-actions" type="primary">Button</six-button>
          </six-card>
        </div>
      
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