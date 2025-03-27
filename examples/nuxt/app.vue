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

const leftSidebarOpen = ref(true);
const route = useRoute();

const apps = ref(['App 1', 'App 2', 'App 3', 'App 4']);
const activeApp = ref('App 2');

const searchActive = ref(false);
</script>

<template>
  <NuxtLayout>
    <six-root>
      <six-header slot="header" :openSearch="searchActive">
        <!-- hamburger menu -->
        <six-header-item>
          <six-icon-button :name="leftSidebarOpen ? 'menu_open' : 'menu'" @click="leftSidebarOpen = !leftSidebarOpen" />
        </six-header-item>

        <!-- logo -->
        <six-header-item>
          <six-icon-button href="https://six-group.github.io/six-webcomponents/demo/vue/">
            <six-logo></six-logo>
          </six-icon-button>
        </six-header-item>

        <!-- Search -->
        <six-header-item :active="searchActive" class="search-icon">
          <six-icon-button name="search" @click="searchActive = !searchActive" />
        </six-header-item>

        <!-- search input -->
        <six-search-field slot="search-field" :debounce="600" clearable />

        <!-- App Switcher -->
        <six-header-dropdown-item>
          <six-header-menu-button slot="trigger">
            <span>{{ activeApp }}</span>
            <six-icon slot="suffix">apps</six-icon>
          </six-header-menu-button>
          <six-menu>
            <six-menu-item v-for="app of apps" :checked="activeApp === app" :value="app" @click="activeApp = app">
              {{ app }}
            </six-menu-item>
          </six-menu>
        </six-header-dropdown-item>

        <!-- profile -->
        <six-header-dropdown-item>
          <six-icon-button slot="trigger">
            <six-avatar
              image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            >
            </six-avatar>
          </six-icon-button>
          <six-menu>
            <six-menu-item value="change-password">Change password</six-menu-item>
            <six-menu-item value="logout">Logout</six-menu-item>
          </six-menu>
        </six-header-dropdown-item>
      </six-header>

      <!-- sidebar -->
      <six-sidebar slot="left-sidebar" position="left" :open="leftSidebarOpen">
        <six-sidebar-item-group :open="route.name === 'home'" name="Home" icon="home">
          <NuxtLink to="/"></NuxtLink>
        </six-sidebar-item-group>
        <six-sidebar-item-group :open="route.name === 'form'" name="Form" icon="assignment">
          <NuxtLink to="/form"></NuxtLink>
        </six-sidebar-item-group>
        <six-sidebar-item-group :open="route.name === 'alert'" name="Alert" icon="notifications_active">
          <NuxtLink to="/alert"></NuxtLink>
        </six-sidebar-item-group>
        <six-sidebar-item-group :open="route.name === 'dialog'" name="Dialog" icon="web_asset">
          <NuxtLink to="/dialog"></NuxtLink>
        </six-sidebar-item-group>
        <six-sidebar-item-group :open="route.name === 'details'" name="Details" icon="unfold_more">
          <NuxtLink to="/details"></NuxtLink>
        </six-sidebar-item-group>
        <six-sidebar-item-group :open="route.name === 'tab-group'" name="Tab Group" icon="tab">
          <NuxtLink to="/tab-group"></NuxtLink>
        </six-sidebar-item-group>
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
</style>
