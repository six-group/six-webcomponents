<template>
<div class="demo my-app">

        <div style="display: flex; flex-wrap: wrap">
          <six-card class="time-format-item">
            <div>HH:mm:ss</div>
            <six-timepicker format="HH:mm:ss" value="13:32:35"></six-timepicker>
          </six-card>
          <six-card class="time-format-item">
            <div>hh:mm:ss:aa</div>
            <six-timepicker format="hh:mm:ss:aa" value="11:59:35:AM"></six-timepicker>
          </six-card>
          <six-card class="time-format-item">
            <div>HH:mm:ss:ms</div>
            <six-timepicker format="HH:mm:ss:ms" value="23:11:53:999"></six-timepicker>
          </six-card>
          <six-card class="time-format-item">
            <div>hh:mm:ss:ms:aa</div>
            <six-timepicker format="hh:mm:ss:ms:aa" value="05:32:35:273:AM"></six-timepicker>
          </six-card>
          <six-card class="time-format-item">
            <div>HH:mm</div>
            <six-timepicker format="HH:mm" value="22:13"></six-timepicker>
          </six-card>
          <six-card class="time-format-item">
            <div>hh:mm:aa</div>
            <six-timepicker format="hh:mm:aa" value="10:53:PM"></six-timepicker>
          </six-card>
          <six-card class="time-format-item">
            <div>HH</div>
            <six-timepicker format="HH" value="05"></six-timepicker>
          </six-card>
          <six-card class="time-format-item">
            <div>hh:aa</div>
            <six-timepicker format="hh:aa" value="08:AM"></six-timepicker>
          </six-card>
          <six-card class="time-format-item">
            <div>mm</div>
            <six-timepicker format="mm" value="59"></six-timepicker>
          </six-card>
          <six-card class="time-format-item">
            <div>ss</div>
            <six-timepicker format="ss" value="11"></six-timepicker>
          </six-card>
          <six-card class="time-format-item">
            <div>ms</div>
            <six-timepicker format="ms" value="254"></six-timepicker>
          </six-card>
          
        </div>
      
</div>
</template>
<style>

            .time-format-item {
              width: 15rem;
              text-align: center;
              padding: 1rem 0.5rem;
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;
              margin: 0.75rem;
            }

            .time-format-item > *:first-child {
              width: 15rem;
              font-weight: bold;
              margin-bottom: 0.5rem;
            }

            six-timepicker {
              max-width: 15rem;
            }
          
</style>
<script>
export default {
  name: 'docs-demo-six-timepicker-298',
  mounted() {  }
}
</script>