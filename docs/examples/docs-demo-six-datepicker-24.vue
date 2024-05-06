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
            width: 25vw;
            height: 25vh;
            margin-top: 25vh;
            background: white;
            position: fixed;
            z-index: 999;
            left: 25vw;
            top: 0;
            border: solid 2px lightgray;
            box-shadow: 0 4px 16px #00000038;
          }

          .dt-modal six-datepicker {
            width: 100%;
            height: calc(100vh - 2.5rem);
            max-width: unset;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-24',
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