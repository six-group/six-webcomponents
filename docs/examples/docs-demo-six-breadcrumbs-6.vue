<template>
<div>

        <six-button type="secondary" id="remove-button">Remove</six-button>
        <six-button type="secondary" id="add-button">Add</six-button>

        <six-breadcrumbs id="dynamic-breadcrumbs">
          <six-breadcrumbs-item>Item 0</six-breadcrumbs-item>
          <six-breadcrumbs-item>Item 1</six-breadcrumbs-item>
        </six-breadcrumbs>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-breadcrumbs-6',
  mounted() { 
          let counter = 2;
          const breadcrumbs = document.getElementById('dynamic-breadcrumbs');

          document.getElementById('remove-button').addEventListener('click', () => {
            breadcrumbs.lastElementChild?.remove();
          });

          document.getElementById('add-button').addEventListener('click', () => {
            const item = document.createElement('six-breadcrumbs-item');
            item.textContent = `Item ${counter++}`;
            breadcrumbs.append(item);
          });
         }
}
</script>