<template>
<div>

        <six-button>
          Requests
          <six-badge pill>30</six-badge>
        </six-button>

        <six-button style="margin-left: 1rem">
          Warnings
          <six-badge type="warning" pill>8</six-badge>
        </six-button>

        <six-button style="margin-left: 1rem">
          Errors
          <six-badge type="danger" pill>6</six-badge>
        </six-button>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-badge-4',
  mounted() {  }
}
</script>