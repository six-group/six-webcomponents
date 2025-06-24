<template>
<div>

        <six-alert type="primary" open closable class="alert-closable">
          <six-icon slot="icon">info</six-icon>
          You can close this alert any time!
        </six-alert>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-alert-2',
  mounted() { 
          (() => {
            const alert = document.querySelector('.alert-closable');
            alert.addEventListener('six-alert-after-hide', () => {
              setTimeout(() => {
                alert.open = true;
              }, 2000);
            });
          })();
         }
}
</script>