<template>
<div>

        <six-language-switcher id="custom-output"></six-language-switcher>
        <div style="margin-top: 1rem">
          <span style="font-weight: bold">selected language: </span><span id="selected-language-custom-output">nothing selected</span>
        </div>
        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-language-switcher-4',
  mounted() { 
          const languageSwitcher = document.getElementById('custom-output');
          const selectedLanguage = document.getElementById('selected-language-custom-output');
          languageSwitcher.languages = [
            { key: 'FR', value: 'French' },
            { key: 'IT', value: 'Italian' },
            { key: 'DE', value: 'German' },
          ];
          languageSwitcher.addEventListener('six-language-switcher-change', (event) => {
            const { detail } = event;
            selectedLanguage.innerText = detail;
          });
         }
}
</script>