<template>
<div>

        <h3>Medium</h3>
        <p>Medium size value=2, readonly</p>
        <six-rating value="2" readonly></six-rating>
        <p>With form label</p>
        <six-rating value="0" label="My label"></six-rating>
        <p>Disabled</p>
        <six-rating value="3" disabled></six-rating>
        <p>Error text</p>
        <six-rating value="3" error-text="This is a simple string message"></six-rating>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-rating-2',
  mounted() {  }
}
</script>