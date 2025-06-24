<template>
<div>

        <div           id="buttonbar-programmatic-example"
          style="
            display: flex;
            justify-content: space-evenly;
            margin-top: 1em;
            margin-bottom: 1em;
            padding: 0 25vw 0 25vw;
          "
        >
          <six-button>First</six-button>
          <six-button>Second</six-button>
          <six-button>Third</six-button>
        </div>

        <div class="details-programmatic-example">
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
  name: 'docs-demo-six-details-7',
  mounted() { 
          const container = document.querySelector('.details-programmatic-example');

          const sixDetails = container.querySelectorAll('six-details');

          // Close all other details when one is shown
          container.addEventListener('six-details-show', (event) => {
            [...sixDetails].map((details) => (details.open = event.target === details));
          });

          const sixButtons = document.getElementById('buttonbar-programmatic-example').querySelectorAll('six-button');

          for (let i = 0; i < sixDetails.length; i++) {
            sixButtons[i].onclick = () => {
              sixDetails[i].open = true;
            };
          }
         }
}
</script>