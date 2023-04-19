<template>
  <six-root @six-root-collapsed="updateCollapsed">
    <AppHeader
      slot="header"
      @toggleLeftSidebar="this.showLeftSidebar = !this.showLeftSidebar"
      @toggleRightSidebar="this.showRightSidebar = !this.showRightSidebar"
      :notifications="tasks.length"
    ></AppHeader>
    <AppLeftSidebar slot="left-sidebar" :open="showLeftSidebar"></AppLeftSidebar>
    <AppRightSidebar slot="right-sidebar" :open="showRightSidebar" :tasks="tasks"></AppRightSidebar>
    <RouterView slot="main"></RouterView>
  </six-root>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SixRoot } from '@six-group/ui-library-vue';
import AppHeader from './components/Header.vue';
import AppLeftSidebar from './components/LeftSidebar.vue';
import AppRightSidebar from './components/RightSidebar.vue';
import Service from './service';

export default defineComponent({
  name: 'App',
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData', // call again the method if the route changes
  },
  components: { SixRoot, AppHeader, AppLeftSidebar, AppRightSidebar },
  methods: {
    async fetchData() {
      this.tasks = await Service.fetchTasks();
    },
    updateCollapsed({ detail }: CustomEvent<{ collapsed: boolean }>) {
      if (detail.collapsed === this.showLeftSidebar) {
        this.showLeftSidebar = !detail.collapsed;
      }
    },
  },
  data() {
    return {
      tasks: [],
      showLeftSidebar: true,
      showRightSidebar: false,
    };
  },
});
</script>

<style>
* {
  box-sizing: border-box;
}

[slot='right-sidebar'] six-sidebar {
  background: #cccccc2e;
}

[slot='main'] {
  padding: 1rem;
}
</style>
