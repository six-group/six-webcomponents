<script setup lang="ts">
import {
  SixAvatar,
  SixBadge,
  SixHeader,
  SixIconButton,
  SixMenu,
  SixMenuItem,
  SixRoot,
  SixSearchField,
  SixSidebar,
  SixSidebarItemGroup,
} from '@six-group/ui-library-vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const leftSidebarOpen = ref(true);

const apps = ref([
  { name: 'App 1', url: '/app-1' },
  { name: 'App 2', url: '/app-2' },
  { name: 'App 3', url: '/app-3' },
  { name: 'App 4', url: '/app-4' },
]);
const activeApp = ref('App 2');
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
        <!-- TODO: Should a click on the app name also open the menu? -->
        <six-menu-item v-for="app of apps" :checked="activeApp === app.name" :value="app.name" :key="app.url">{{
          app.name
        }}</six-menu-item>
      </six-menu>
      <six-menu slot="profile-menu">
        <six-menu-item value="change-password">Change password</six-menu-item>
        <six-menu-item value="logout">Logout</six-menu-item>
      </six-menu>
      <six-avatar
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        slot="profile-avatar"
      ></six-avatar>
    </six-header>
    <six-sidebar slot="left-sidebar" position="left" :open="leftSidebarOpen">
      <six-sidebar-item-group
        router-link="/"
        :open="$router.currentRoute.value.name === 'home'"
        name="Home"
        icon="home"
      ></six-sidebar-item-group>
      <six-sidebar-item-group
        router-link="/form"
        :open="$router.currentRoute.value.name === 'form'"
        name="Form"
        icon="assignment"
      ></six-sidebar-item-group>
      <six-sidebar-item-group
        router-link="/alert"
        :open="$router.currentRoute.value.name === 'alert'"
        name="Alert"
        icon="notifications_active"
      >
      </six-sidebar-item-group>
      <six-sidebar-item-group
        router-link="/dialog"
        :open="$router.currentRoute.value.name === 'dialog'"
        name="Dialog"
        icon="web_asset"
      >
      </six-sidebar-item-group>
      <six-sidebar-item-group
        router-link="/details"
        :open="$router.currentRoute.value.name === 'details'"
        name="Details"
        icon="unfold_more"
      >
      </six-sidebar-item-group>
      <six-sidebar-item-group
        router-link="/tab-group"
        :open="$router.currentRoute.value.name === 'tab-group'"
        name="Tab Group"
        icon="tab"
      >
      </six-sidebar-item-group>
    </six-sidebar>
    <div slot="main">
      <router-view></router-view>
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
