<template>
<div>

        <six-button id="modal-ex-dt">Toggle Modal</six-button>

        <div id="dt-modal" class="dt-modal">
          <six-datepicker placement="top"></six-datepicker>
          <six-datepicker placement="bottom"></six-datepicker>
        </div>

        

        
      
</div>
</template>
<style>

          .dt-modal {
            display: none;
            flex-wrap: wrap;
            width: 50vw;
            height: 100vh;
            background: white;
            position: fixed;
            z-index: 1;
            left: 25vw;
            top: 0;
            border: solid 1px lightgray;
          }

          .dt-modal six-datepicker {
            width: 100%;
            height: calc(100vh - 2.5rem);
            max-width: unset;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-22',
  mounted() { 
          let modalIsShown = false;

          const btn = document.getElementById('modal-ex-dt');
          const dtModal = document.getElementById('dt-modal');
          btn.addEventListener('click', () => {
            if (modalIsShown) {
              dtModal.style.display = 'none';
            } else {
              dtModal.style.display = 'flex';
            }

            modalIsShown = !modalIsShown;
          });
         }
}
</script>