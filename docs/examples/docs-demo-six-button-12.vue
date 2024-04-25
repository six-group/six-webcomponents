<template>
<div>

        <six-tooltip content="My Toolip">
          <six-button disabled onclick="alert('should not appear')">Primary</six-button>
        </six-tooltip>
        <six-button type="secondary" disabled>Secondary</six-button>
        <six-button type="link" disabled>Link</six-button>
        <six-button type="success" disabled>Success</six-button>
        <six-button type="warning" disabled>Warning</six-button>
        <six-button type="danger" disabled>Danger</six-button>
        <six-button type="action" disabled>Action</six-button>
        <six-button type="action-outline" disabled>Action Outline</six-button>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-button-12',
  mounted() {  }
}
</script>