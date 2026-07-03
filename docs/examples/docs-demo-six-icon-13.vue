<template>
<div>

        <div style="display: flex; gap: 1em; min-height: 6rem; align-items: center; fill: red">
          <six-icon size="xSmall" :src="withBase('/assets/demo-icon.svg')" inline-svg></six-icon>
          <six-icon size="small" :src="withBase('/assets/demo-icon.svg')" inline-svg></six-icon>
          <six-icon size="large" :src="withBase('/assets/demo-icon.svg')" inline-svg></six-icon>
          <six-icon size="xxLarge" :src="withBase('/assets/demo-icon.svg')" inline-svg></six-icon>
        </div>
      
</div>
</template>
<style>

</style>
<script>
import { withBase } from 'vitepress';

export default {
  name: 'docs-demo-six-icon-13',
  methods: { withBase },
  mounted() {  }
}
</script>
