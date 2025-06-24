<template>
<div>

        <six-datepicker id="datepicker-adv-footer">
          <div             style="
              display: flex;
              justify-content: space-between;
              padding: 1rem 0.5rem 0 0.5rem;
              border-top: solid 1px #c3c3c3;
            "
          >
            <six-button id="datepicker-adv-footer-btn1">Today</six-button>
            <six-button id="datepicker-adv-footer-btn2">Clear</six-button>
          </div>
        </six-datepicker>
        
        
      
</div>
</template>
<style>

          six-datepicker {
            max-width: 25rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-datepicker-10',
  mounted() { 
          const datepicker = document.getElementById('datepicker-adv-footer');
          datepicker.addEventListener('six-datepicker-select', (event) => {
            console.log(`[ six-datepicker-select ]`, { date: event.detail });
          });

          const btn1 = document.getElementById('datepicker-adv-footer-btn1');
          btn1.addEventListener('click', () => (datepicker.value = new Date()));

          const btn2 = document.getElementById('datepicker-adv-footer-btn2');
          btn2.addEventListener('click', () => (datepicker.value = null));
         }
}
</script>