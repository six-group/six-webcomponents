<script setup lang="ts">
import {
  SixAvatar,
  SixHeader,
  SixHeaderDropdownItem,
  SixHeaderItem,
  SixHeaderMenuButton,
  SixIcon,
  SixIconButton,
  SixLogo,
  SixMenu,
  SixMenuItem,
  SixRoot,
  SixSearchField,
  SixSidebar,
  SixSidebarItemGroup,
} from '@six-group/ui-library-vue';
import { ref } from 'vue';

import '@six-group/ui-library/dist/ui-library/ui-library.css';

import { defineCustomElements } from '@six-group/ui-library/loader';

defineCustomElements();

const router = useRouter();

const navManager = {
  navigate: (payload: { event: Event; routerLink: string }) => {
    router.push(payload.routerLink);
  },
};

const nuxtApp = useNuxtApp();
nuxtApp.provide('navManager', navManager);

const leftSidebarOpen = ref(true);
const route = useRoute();

const apps = ref(['App 1', 'App 2', 'App 3', 'App 4']);
const activeApp = ref('App 2');

const searchActive = ref(false);
</script>

<template>
  <NuxtLayout>
    <six-root>
      <SixHeader slot="header" :openSearch="searchActive">
        <!-- hamburger menu -->
        <SixHeaderItem>
          <SixIconButton :name="leftSidebarOpen ? 'menu_open' : 'menu'" @click="leftSidebarOpen = !leftSidebarOpen" />
        </SixHeaderItem>

        <!-- logo -->
        <SixHeaderItem>
          <SixIconButton href="https://six-group.github.io/six-webcomponents/demo/nuxt/">
            <six-logo></six-logo>
          </SixIconButton>
        </SixHeaderItem>

        <!-- Search -->
        <SixHeaderItem :active="searchActive" class="search-icon">
          <SixIconButton name="search" @click="searchActive = !searchActive" />
        </SixHeaderItem>

        <!-- search input -->
        <six-search-field slot="search-field" :debounce="600" clearable />

        <!-- App Switcher -->
        <SixHeaderDropdownItem>
          <SixHeaderMenuButton slot="trigger">
            <span>{{ activeApp }}</span>
            <six-icon slot="suffix">apps</six-icon>
          </SixHeaderMenuButton>
          <six-menu>
            <six-menu-item v-for="app of apps" :checked="activeApp === app" :value="app" @click="activeApp = app">
              {{ app }}
            </six-menu-item>
          </six-menu>
        </SixHeaderDropdownItem>

        <!-- profile -->
        <SixHeaderDropdownItem>
          <SixIconButton slot="trigger">
            <six-avatar
              image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            >
            </six-avatar>
          </SixIconButton>
          <six-menu>
            <six-menu-item value="change-password">Change password</six-menu-item>
            <six-menu-item value="logout">Logout</six-menu-item>
          </six-menu>
        </SixHeaderDropdownItem>
      </SixHeader>

      <!-- sidebar -->
      <six-sidebar slot="left-sidebar" position="left" :open="leftSidebarOpen">
        <NuxtLink to="/">
          <six-sidebar-item-group name="Home" icon="home"> </six-sidebar-item-group>
        </NuxtLink>
        <NuxtLink to="/form">
          <six-sidebar-item-group :open="route.name === 'form'" name="Form" icon="assignment"> </six-sidebar-item-group>
        </NuxtLink>
        <NuxtLink to="/alert">
          <six-sidebar-item-group :open="route.name === 'alert'" name="Alert" icon="notifications_active">
          </six-sidebar-item-group>
        </NuxtLink>
        <NuxtLink to="/dialog">
          <six-sidebar-item-group :open="route.name === 'dialog'" name="Dialog" icon="web_asset">
          </six-sidebar-item-group>
        </NuxtLink>
        <NuxtLink to="/details">
          <six-sidebar-item-group :open="route.name === 'details'" name="Details" icon="unfold_more">
          </six-sidebar-item-group>
        </NuxtLink>
        <NuxtLink to="/tab-group">
          <six-sidebar-item-group :open="route.name === 'tab-group'" name="Tab Group" icon="tab">
          </six-sidebar-item-group>
        </NuxtLink>
      </six-sidebar>
      <div slot="main">
        <NuxtPage />
      </div>
    </six-root>
  </NuxtLayout>
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

.search-icon {
  margin-left: auto;
}

a {
  text-decoration: none;
}
</style>
