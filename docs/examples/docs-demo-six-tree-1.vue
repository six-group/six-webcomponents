<template>
<div>

        <h2>With lines</h2>
        <six-tree class="tree-with-lines">
          <six-tree-item expanded>
            Deciduous
            <six-tree-item>Birch</six-tree-item>
            <six-tree-item expanded>
              Maple
              <six-tree-item>Field maple</six-tree-item>
              <six-tree-item>Red maple</six-tree-item>
              <six-tree-item>Sugar maple</six-tree-item>
            </six-tree-item>
            <six-tree-item>Oak</six-tree-item>
          </six-tree-item>

          <six-tree-item>
            Coniferous
            <six-tree-item>Cedar</six-tree-item>
            <six-tree-item>Pine</six-tree-item>
            <six-tree-item>Spruce</six-tree-item>
          </six-tree-item>

          <six-tree-item>
            Non-trees
            <six-tree-item>Bamboo</six-tree-item>
            <six-tree-item>Cactus</six-tree-item>
            <six-tree-item>Fern</six-tree-item>
          </six-tree-item>
        </six-tree>

        
      
</div>
</template>
<style>

          .tree-with-lines {
            --indent-guide-width: 1px;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-tree-1',
  mounted() {  }
}
</script>