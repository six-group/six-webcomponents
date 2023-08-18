<template>
<div class="demo my-app">

        <six-language-switcher id="async-six-lang-switcher"></six-language-switcher>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-language-switcher-174',
  mounted() { 
          const langSwitcher = document.getElementById('async-six-lang-switcher');
          setTimeout(() => (langSwitcher.languages = ['FR', 'IT', 'DE']), 250);
         }
}
</script>