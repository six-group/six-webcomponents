<template>
<div class="demo my-app">

        <div class="format-example">
          <six-timepicker format="HH:mm:ss" placeholder="HH:mm:ss"></six-timepicker>
          <six-timepicker format="hh:mm:ss:aa" placeholder="hh:mm:ss:aa"></six-timepicker>
          <six-timepicker format="HH:mm:ss:ms" placeholder="HH:mm:ss:ms"></six-timepicker>
          <six-timepicker format="hh:mm:ss:ms:aa" placeholder="hh:mm:ss:ms:aa"></six-timepicker>
          <six-timepicker format="HH:mm" placeholder="HH:mm"></six-timepicker>
          <six-timepicker format="hh:mm:aa" placeholder="hh:mm:aa"></six-timepicker>
          <six-timepicker format="HH" placeholder="HH"></six-timepicker>
          <six-timepicker format="hh:aa" placeholder="hh:aa"></six-timepicker>
          <six-timepicker format="mm" placeholder="mm"></six-timepicker>
          <six-timepicker format="ss" placeholder="ss"></six-timepicker>
          <six-timepicker format="ms" placeholder="ms"></six-timepicker>
        </div>
        
      
</div>
</template>
<style>

          .format-example {
            display: flex;
            flex-wrap: wrap;
          }

          .format-example > * {
            margin-right: 1.5rem;
            margin-bottom: 1.5rem;
          }

          six-timepicker {
            max-width: 15rem;
          }
        
</style>
<script>
export default {
  name: 'docs-demo-six-timepicker-297',
  mounted() {  }
}
</script>