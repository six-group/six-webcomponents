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
import { ref } from 'vue';

const leftSidebarOpen = ref(true);
</script>

<template>
  <six-root>
    <six-header
      slot="header"
      :open-hamburger-menu="leftSidebarOpen"
      @six-header-hamburger-menu-clicked="leftSidebarOpen = !leftSidebarOpen"
    >
      <six-search-field slot="search-field" :debounce="600"></six-search-field>
      <six-icon-button slot="notifications" name="notifications_none">
        <six-badge type="danger" pill>10</six-badge>
      </six-icon-button>
      <div slot="menu-content">
        <div>Menu</div>
      </div>
      <six-menu slot="app-switcher-menu">
        <six-menu-item>App1</six-menu-item>
        <six-menu-item :checked="true">App2</six-menu-item>
        <six-menu-item>App3</six-menu-item>
        <six-menu-item>App4</six-menu-item>
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
