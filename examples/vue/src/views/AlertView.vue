<script setup lang="ts">
import type { Components } from '@six-group/ui-library';
import { SixAlert, SixButton, SixInput } from '@six-group/ui-library-vue';
import { ref } from 'vue';

const primary = ref<Components.SixAlert>();
const success = ref<Components.SixAlert>();
const info = ref<Components.SixAlert>();

const toastMessage = ref('Your Message');

function showToast() {
  notify(toastMessage.value);
}

function escapeHtml(html: string) {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}

function notify(message: string, type = 'primary', icon = 'info', duration = 3000) {
  const alert = Object.assign(document.createElement('six-alert'), {
    type,
    closable: true,
    duration,
    innerHTML: `
            <six-icon slot="icon">${icon}</six-icon>
            ${escapeHtml(message)}`,
  });

  document.body.append(alert);
  return alert.toast();
}
</script>

<template>
  <h2>Alert</h2>

  <h3>Toast Notifications</h3>
  <section>
    <div class="buttons">
      <six-button type="primary" @click="primary?.toast()">Primary</six-button>
      <six-button type="success" @click="success?.toast()">Success</six-button>
      <six-button type="secondary" @click="info?.toast()">Info</six-button>
    </div>

    <six-alert type="primary" :duration="3000" closable ref="primary">
      <six-icon slot="icon">info</six-icon>
      <strong>This is super informative</strong><br />
      You can tell by how pretty the alert is.
    </six-alert>

    <six-alert type="success" :duration="3000" closable ref="success">
      <six-icon slot="icon">check_circle</six-icon>
      <strong>Your changes have been saved</strong><br />
      You can safely exit the app now.
    </six-alert>

    <six-alert type="info" :duration="3000" closable ref="info">
      <six-icon slot="icon">info</six-icon>
      <strong>Your settings have been updated</strong><br />
      Settings will take affect on next login.
    </six-alert>
  </section>

  <h3>Imperative Toasts</h3>
  <section>
    <six-input v-model="toastMessage"></six-input>
    <six-button @click="showToast()">Show Toast</six-button>
  </section>
</template>

<style scoped>
h2 {
  margin-top: 0;
}

section {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: var(--six-spacing-medium);

  six-button {
    align-self: flex-start;
  }
}

.buttons {
  display: flex;
  gap: var(--six-spacing-x-small);
}
</style>
