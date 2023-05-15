<template>
  <div class="dashboard">
    <img width="200" alt="Vue logo" src="../assets/logo.svg" />
    <h1>Demo</h1>
    <p>This is a <b>Vue.js</b> Demo App using <a href="TODO">@six-group/ui-library</a></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
});
</script>

<style scoped lang="scss">
.dashboard {
  padding: 1rem;
  text-align: center;
}
</style>
