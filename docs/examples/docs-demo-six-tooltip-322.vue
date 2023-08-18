<template>
<div class="demo my-app">

        <six-button style="margin-right: 4rem">Toggle Manually</six-button>

        <six-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
          <six-avatar></six-avatar>
        </six-tooltip>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-tooltip-322',
  mounted() { 
          let tooltip = document.querySelector('.manual-tooltip');
          let toggle = tooltip.previousElementSibling;

          toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
         }
}
</script>