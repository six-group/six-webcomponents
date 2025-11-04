<script setup lang="ts">
import { SixButton, SixDialog } from '@six-group/ui-library-vue';
import { ref } from 'vue';

const isVisible = ref(false);
</script>

<template>
  <h2>Dialog</h2>
  <six-button @click="isVisible = true">Show Dialog</six-button>
  <six-dialog label="Dialog" :open="isVisible" @six-dialog-hide="isVisible = false">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
    gubergren, no sea takimata sanctus.
    <six-button slot="footer" type="primary" @click="isVisible = false">Close</six-button>
  </six-dialog>
</template>

<style scoped>
h2 {
  margin-top: 0;
}
</style>
