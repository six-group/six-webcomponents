<template>
<div>

        <six-root>
          <six-header show-search slot="header" shift-content id="clickableLogoHeader" clickable-logo> </six-header>
          <section slot="main"></section>
        </six-root>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-header-4',
  mounted() { 
          const header = document.getElementById('clickableLogoHeader');
          header.addEventListener('six-header-logo-clicked', () => {
            alert('logo clicked');
          });
         }
}
</script>