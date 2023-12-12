<script setup lang="ts">
import { RouterView } from 'vue-router';
import {
  SixHeader,
  SixSearchField,
  SixRoot,
  SixIconButton,
  SixBadge,
  SixMenu,
  SixMenuItem,
  SixAvatar,
  SixSidebar,
  SixSidebarItemGroup,
} from '@six-group/ui-library-vue';
import { onMounted, ref } from 'vue';

const leftSidebarOpen = ref(true);

type App = { name: string; url: string };
const apps = ref<App[]>([
  { name: 'App 1', url: '/app-1' },
  { name: 'App 2', url: '/app-2' },
  { name: 'App 3', url: '/app-3' },
  { name: 'App 4', url: '/app-4' },
]);

const activeApp = ref('App 2');

// TODO: This workaround to correctly show "App 2" as the active app in the header should not be needed.
onMounted(() => setTimeout(() => showActiveAppInHeader(apps.value[1]), 100));

function updateAvailableApps() {
  apps.value = [
    { name: 'App 5', url: '/app-5' },
    { name: 'App 6', url: '/app-6' },
  ];
  activeApp.value = 'App 6';

  // TODO: This workaround to update the active app in the header should not be needed.
  showActiveAppInHeader(apps.value[1]);
}

const appSwitcher = ref<HTMLElement>();
function showActiveAppInHeader(app: App) {
  const event = new CustomEvent('six-menu-item-selected', {
    detail: { item: { innerText: app.name }, name: app.name },
    bubbles: true,
    cancelable: true,
  });
  appSwitcher.value?.dispatchEvent(event);
}
</script>

<template>
  <six-root>
    <six-header
      slot="header"
      :open-hamburger-menu="leftSidebarOpen"
      @six-header-hamburger-menu-clicked="leftSidebarOpen = !leftSidebarOpen"
      @six-header-app-switcher-select="activeApp = $event.detail.name"
    >
      <six-search-field slot="search-field" :debounce="600"></six-search-field>
      <six-icon-button slot="notifications" name="notifications_none">
        <six-badge type="danger" pill>10</six-badge>
      </six-icon-button>
      <six-menu slot="app-switcher-menu" ref="appSwitcher">
        <!-- TODO: Clicking on the app name should also open the app switcher -->
        <six-menu-item v-for="app of apps" :checked="activeApp === app.name" :value="app.name" :key="app.url">{{
          app.name
        }}</six-menu-item>
      </six-menu>
      <six-menu slot="profile-menu">
        <six-menu-item value="update-apps" @click="updateAvailableApps()">Update available apps</six-menu-item>
        <six-menu-item value="change-password">Change password</six-menu-item>
        <six-menu-item value="logout">Logout</six-menu-item>
      </six-menu>
      <six-avatar
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        slot="profile-avatar"
      ></six-avatar>
    </six-header>
    <six-sidebar slot="left-sidebar" position="left" :open="leftSidebarOpen">
      <!-- TODO: Add router-link attribute as done in ionic: https://ionicframework.com/docs/vue/navigation -->
      <six-sidebar-item-group
        @click="$router.push('/')"
        :open="$router.currentRoute.value.name === 'home'"
        name="Home"
        icon="home"
      ></six-sidebar-item-group>
      <six-sidebar-item-group
        @click="$router.push('/form')"
        :open="$router.currentRoute.value.name === 'form'"
        name="Form"
        icon="assignment"
      ></six-sidebar-item-group>
      <six-sidebar-item-group
        @click="$router.push('/alert')"
        :open="$router.currentRoute.value.name === 'alert'"
        name="Alert"
        icon="notifications_active"
      >
      </six-sidebar-item-group>
      <six-sidebar-item-group
        @click="$router.push('/dialog')"
        :open="$router.currentRoute.value.name === 'dialog'"
        name="Dialog"
        icon="web_asset"
      >
      </six-sidebar-item-group>
    </six-sidebar>
    <div slot="main">
      <RouterView />
    </div>
  </six-root>
</template>

<style scoped>
six-root {
  height: 100vh;
}

[slot='right-sidebar'] six-sidebar {
  background: var(--six-color-web-rock-600);
}

[slot='main'] {
  padding-left: var(--six-spacing-xxx-large);
  padding-right: var(--six-spacing-xxx-large);
}
</style>
