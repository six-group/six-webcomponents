<template>
<div class="demo my-app">

        <div class="tags-clearable">
          <six-tag size="small" clearable>Small</six-tag>
          <six-tag size="medium" clearable>Medium</six-tag>
          <six-tag size="large" clearable>Large</six-tag>
        </div>

        

        
      
</div>
</template>
<style>

          .tags-clearable six-tag {
            transition: var(--six-transition-medium) opacity;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-tag-278',
  mounted() { 
          const div = document.querySelector('.tags-clearable');

          div.addEventListener('six-clear', (event) => {
            const tag = event.target;
            tag.style.opacity = '0';
            setTimeout(() => (tag.style.opacity = '1'), 2000);
          });
         }
}
</script>