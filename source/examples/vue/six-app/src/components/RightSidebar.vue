<template>
    <six-sidebar position="right" :open="open">
      <six-card v-for="task in tasks">
        <h3>Task #{{ task.id }}</h3>
        <p>{{ task.title }}</p>
      </six-card>
    </six-sidebar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SixSidebar, SixCard } from '@six-group/ui-library-vue';

export default defineComponent({
  name: 'AppRightSidebar',
  components: { SixSidebar, SixCard },
  props: [ 'open', 'tasks' ]
});
</script>

<style scoped lang="scss">
six-sidebar {
  background-color: var(--six-color-web-rock-100);
}

six-card {
  width: 100%;
  background-color: var(--six-color-white);
}
</style>
