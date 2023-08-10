<template>
<div class="demo my-app">

        <six-form class="input-validation-required">
          <six-timepicker             name="arrivalTime"
            error-text="Time of Arrival is missing or invalid"
            label="Time of Arrival"
            required
          ></six-timepicker>
          <br><br>
          <six-button type="primary" submit>Submit</six-button>
          <six-button type="primary" reset>Reset</six-button>
        </six-form>

        
        
      
</div>
</template>
<style>

          six-timepicker {
            max-width: 15rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-timepicker-316',
  mounted() { 
          const formRequired = document.querySelector('.input-validation-required');
          formRequired.addEventListener('six-form-submit', () => alert('All fields are valid!'));
         }
}
</script>