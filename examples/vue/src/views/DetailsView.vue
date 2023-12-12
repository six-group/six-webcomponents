<script setup lang="ts">
import { SixButton, SixCheckbox, SixDetails } from '@six-group/ui-library-vue';
import { ref } from 'vue';

const isOpen = ref(false);
const isDisabled = ref(false);

const openIndex = ref(2);

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? -1 : index;
}
</script>

<template>
  <h2>Details</h2>

  <section>
    <six-details
      :open="isOpen"
      summary="Toggle Me"
      summary-icon="settings"
      :disabled="isDisabled"
      @six-details-hide="isOpen = false"
      @six-details-show="isOpen = true"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet.
    </six-details>
    <six-button @click="isOpen = !isOpen">{{ isOpen ? 'Close' : 'Open' }}</six-button>
    <six-checkbox :checked="isDisabled" @change="isDisabled = $event.target.checked" label="Disabled"></six-checkbox>
  </section>

  <h3>Grouped</h3>

  <section class="grouped">
    <six-details summary="First" @click="toggle(0)" :open="openIndex === 0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </six-details>

    <six-details summary="Second" @click="toggle(1)" :open="openIndex === 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </six-details>

    <six-details summary="Third" @click="toggle(2)" :open="openIndex === 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </six-details>
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

.grouped {
  gap: var(--six-spacing-xx-small);
}
</style>
