<template>
<div>

        <div style="--six-tooltip-arrow-size: 0">
          <six-tooltip content="This is a tooltip">
            <six-button>Above</six-button>
          </six-tooltip>

          <six-tooltip content="This is a tooltip" placement="bottom">
            <six-button>Below</six-button>
          </six-tooltip>
        </div>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-tooltip-4',
  mounted() {  }
}
</script>