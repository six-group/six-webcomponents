<template>
  <six-root @six-root-collapsed="updateCollapsed">
    <app-header slot="header"
        @toggleLeftSidebar="this.showLeftSidebar = !this.showLeftSidebar"
        @toggleRightSidebar="this.showRightSidebar = !this.showRightSidebar"
        :notifications="tasks.length"
    ></app-header>
    <app-left-sidebar slot="left-sidebar" :open="showLeftSidebar"></app-left-sidebar>
    <app-right-sidebar slot="right-sidebar" :open="showRightSidebar" :tasks="tasks"></app-right-sidebar>
    <router-view slot="main"></router-view>
  </six-root>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SixRoot } from '@six-group/ui-library-vue';
import AppHeader from './components/Header.vue';
import AppLeftSidebar from './components/LeftSidebar.vue';
import AppRightSidebar from './components/RightSidebar.vue';
import Service from '@/service';

export default defineComponent({
  name: 'App',
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData' // call again the method if the route changes
  },
  components: { SixRoot, AppHeader, AppLeftSidebar, AppRightSidebar },
  methods: {
    async fetchData() {
      this.tasks = await Service.fetchTasks();
    },
    updateCollapsed({ detail }: CustomEvent<{ collapsed: boolean}>) {
      if (detail.collapsed === this.showLeftSidebar) {
        this.showLeftSidebar = !detail.collapsed;
      }
    },
  },
  data() {
    return {
      tasks: [],
      showLeftSidebar: true,
      showRightSidebar: false
    }
  }
});
</script>

<style>
@import '~@six-group/ui-library/dist/ui-library/ui-library.css';

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
