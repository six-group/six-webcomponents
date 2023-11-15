<script lang="ts">
export default {
  data() {
    return { text: '', count: 0 };
  },
};
</script>

<template>
  <section>
    <six-input v-model="text" label="Text"></six-input>
    <six-range v-model="count" label="Count" min="0" max="100" step="1"></six-range>
  </section>

  <div>
    <p>Text: {{ text }}</p>
    <p>Count: {{ count }}</p>
  </div>
</template>

<style>
section {
  display: flex;
  flex-direction: column;
  gap: var(--six-spacing-large);
  width: 300px;
}
</style>
