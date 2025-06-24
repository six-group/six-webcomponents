<template>
<div>

        <div class="badge-pulse">
          <six-badge type="primary" pill pulse>1</six-badge>
          <six-badge type="info" pill pulse>1</six-badge>
          <six-badge type="success" pill pulse>1</six-badge>
          <six-badge type="warning" pill pulse>1</six-badge>
          <six-badge type="danger" pill pulse>1</six-badge>
          <six-badge type="action" pill pulse>1</six-badge>
        </div>

        
      
</div>
</template>
<style>

          .badge-pulse six-badge:not(:last-of-type) {
            margin-right: 1rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-badge-3',
  mounted() {  }
}
</script>