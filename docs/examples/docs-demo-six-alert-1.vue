<template>
<div class="demo my-app">

        <six-alert type="primary" open>
          <six-icon slot="icon">info</six-icon>
          <strong>This is super informative</strong><br>
          You can tell by how pretty the alert is.
        </six-alert>

        <br>

        <six-alert type="success" open>
          <six-icon slot="icon">check_circle</six-icon>
          <strong>Your changes have been saved</strong><br>
          You can safely exit the app now.
        </six-alert>

        <br>

        <six-alert type="info" open>
          <six-icon slot="icon">info</six-icon>
          <strong>Your settings have been updated</strong><br>
          Settings will take affect on next login.
        </six-alert>

        <br>

        <six-alert type="warning" open>
          <six-icon slot="icon">warning_amber</six-icon>
          <strong>Your session has ended</strong><br>
          Please login again to continue.
        </six-alert>

        <br>

        <six-alert type="danger" open>
          <six-icon slot="icon">error_outline</six-icon>
          <strong>Your account has been deleted</strong><br>
          We're very sorry to see you go!
        </six-alert>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-alert-1',
  mounted() {  }
}
</script>