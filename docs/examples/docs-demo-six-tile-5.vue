<template>
<div>

        <six-tile id="tileWithLabelSlot" icon-name="home">
          <div slot="label" style="text-align: center; min-height: 4em">
            <div>some very long label</div>
            <div>which requires</div>
            <div>multiple lines</div>
          </div>
        </six-tile>
        <six-tile id="tileWithIconSlot" sixTileSelected="alert('clicked')">
          <six-icon slot="icon" size="xxLarge" style="color: red">delete</six-icon>
          <div slot="label" style="text-align: center; min-height: 4em; align-items: center; display: flex">
            short label
          </div>
        </six-tile>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-tile-5',
  mounted() { 
          const tile1 = document.querySelector('#tileWithIconSlot');
          tile1.addEventListener('six-tile-selected', () => alert('hello custom icon tile!'));

          const tile2 = document.querySelector('#tileWithLabelSlot');
          tile2.addEventListener('six-tile-selected', () => alert('hello custom label tile!'));
         }
}
</script>