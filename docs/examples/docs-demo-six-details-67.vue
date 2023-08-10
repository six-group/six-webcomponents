<template>
<div class="demo my-app">

        <div class="details-group-example">
          <six-details summary="First" open>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </six-details>

          <six-details summary="Second">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </six-details>

          <six-details summary="Third">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </six-details>
        </div>

        

        
      
</div>
</template>
<style>

          .details-group-example six-details:not(:last-of-type) {
            margin-bottom: var(--six-spacing-xx-small);
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-details-67',
  mounted() { 
          const container = document.querySelector('.details-group-example');

          // Close all other details when one is shown
          container.addEventListener('six-details-show', (event) => {
            [...container.querySelectorAll('six-details')].map((details) => (details.open = event.target === details));
          });
         }
}
</script>