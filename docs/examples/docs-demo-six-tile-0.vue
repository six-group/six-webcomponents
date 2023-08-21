<template>
<div>

        <six-tile id="tileFancy" label="Fancy Tile" icon-name="favorite"></six-tile>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-tile-0',
  mounted() { 
          const tile = document.querySelector('#tileFancy');
          tile.addEventListener('six-tile-selected', () => alert('hello fancy tile!'));
         }
}
</script>