<template>
<div class="demo my-app">

        <six-language-switcher id="custom-language-set"></six-language-switcher>
        <div style="margin-top: 1rem">
          <span style="font-weight: bold">selected language: </span><span id="selected-language">nothing selected</span>
        </div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-language-switcher-170',
  mounted() { 
          const languageSwitcher = document.getElementById('custom-language-set');
          const selectedLanguage = document.getElementById('selected-language');
          languageSwitcher.languages = ['FR', 'IT', 'DE'];

          languageSwitcher.addEventListener('six-language-switcher-change', (event) => {
            const { detail } = event;
            selectedLanguage.innerText = detail;
          });
         }
}
</script>