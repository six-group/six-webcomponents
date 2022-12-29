<template>
  <div class="dashboard">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Demo</h1>
    <p>This is a <b>Vue.js</b> Demo App using <a href="TODO">@six-group/ui-library</a></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SixButton, SixBadge } from '@six-group/ui-library-vue';

export default defineComponent({
  name: 'Home',
  components: { SixButton, SixBadge },
});
</script>

<style scoped lang="scss">
.dashboard {
  padding: 1rem;
  text-align: center;
}
</style>
