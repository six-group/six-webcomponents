<template>
<div>

        <div class="alert-toast">
          <six-button id="primary-button" type="primary">Primary</six-button>
          <six-button id="success-button" type="success">Success</six-button>
          <six-button id="secondary-button" type="secondary">Info</six-button>
          <six-button id="warning-button" type="warning">Warning</six-button>
          <six-button id="danger-button" type="danger">Danger</six-button>

          <six-alert id="primary-alert" type="primary" duration="3000" closable>
            <six-icon slot="icon">info</six-icon>
            <strong>This is super informative</strong><br>
            You can tell by how pretty the alert is.
          </six-alert>

          <six-alert id="success-alert" type="success" duration="3000" closable>
            <six-icon slot="icon">check_circle</six-icon>
            <strong>Your changes have been saved</strong><br>
            You can safely exit the app now.
          </six-alert>

          <six-alert id="info-alert" type="info" duration="3000" closable>
            <six-icon slot="icon">info</six-icon>
            <strong>Your settings have been updated</strong><br>
            Settings will take affect on next login.
          </six-alert>

          <six-alert id="warning-alert" type="warning" duration="3000" closable>
            <six-icon slot="icon">warning_amber</six-icon>
            <strong>Your session has ended</strong><br>
            Please login again to continue.
          </six-alert>

          <six-alert id="danger-alert" type="danger" duration="3000" closable>
            <six-icon slot="icon">error_outline</six-icon>
            <strong>Your account has been deleted</strong><br>
            We're very sorry to see you go!
          </six-alert>
        </div>

        
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-alert-5',
  mounted() { 
          (() => {
            const alertToastContainer = document.querySelector('.alert-toast');

            Object.entries({
              primary: 'primary',
              success: 'success',
              info: 'secondary',
              warning: 'warning',
              danger: 'danger',
            }).map(([alertType, buttonType]) => {
              const button = alertToastContainer.querySelector(`#${buttonType}-button`);
              const alert = alertToastContainer.querySelector(`#${alertType}-alert`);

              button.addEventListener('click', () => alert.toast());
            });
          })();
         }
}
</script>