<template>
  <six-root @six-root-collapsed="updateCollapsed">
    <AppHeader
      slot="header"
      @toggleLeftSidebar="showLeftSidebar = !showLeftSidebar"
      @toggleRightSidebar="showRightSidebar = !showRightSidebar"
      :notifications="tasks.length"
    ></AppHeader>
    <AppLeftSidebar slot="left-sidebar" :open="showLeftSidebar"></AppLeftSidebar>
    <AppRightSidebar slot="right-sidebar" :open="showRightSidebar" :tasks="tasks"></AppRightSidebar>
    <RouterView slot="main"></RouterView>
  </six-root>
</template>

<script setup lang="ts">
import { defineComponent, watch, ref, onMounted } from 'vue';
import { SixRoot } from '@six-group/ui-library-vue';
import AppHeader from './components/Header.vue';
import AppLeftSidebar from './components/LeftSidebar.vue';
import AppRightSidebar from './components/RightSidebar.vue';
import Service from './service';
import { useRoute } from 'vue-router';

defineComponent({
  name: 'App',
});

const route = useRoute();

const tasks = ref([]);
const showLeftSidebar = ref(true);
const showRightSidebar = ref(false);

watch(route, () => fetchData());

const fetchData = async () => {
  tasks.value = await Service.fetchTasks();
};

const updateCollapsed = ({ detail }: CustomEvent<{ collapsed: boolean }>) => {
  if (detail.collapsed === showLeftSidebar.value) {
    showLeftSidebar.value = !detail.collapsed;
  }
};

onMounted(() => fetchData());
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
