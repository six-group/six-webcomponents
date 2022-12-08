<template>
  <six-header
      @six-header-hamburger-menu-clicked="$emit('toggleLeftSidebar')"
      @six-header-app-switcher-select="$emit('showAppSwitcher')"
      @six-header-profile-select="$emit('showProfile')"
  >
    <six-search-field
        slot="search-field"
        debounce="600"
        @six-search-field-change="$emit('searchFieldChange')"
    ></six-search-field>

    <six-icon-button
        slot="notifications"
        name="notifications_none"
        @click="$emit('toggleRightSidebar')"
    >
      <six-badge type="danger" pill>{{ notifications }}</six-badge>
    </six-icon-button>

    <div slot="menu-content">
      <div>Menu</div>
    </div>

    <six-menu slot="app-switcher-menu">
      <six-menu-item>App1</six-menu-item>
      <six-menu-item>App2</six-menu-item>
      <six-menu-item>App3</six-menu-item>
      <six-menu-item>App4</six-menu-item>
    </six-menu>

    <six-menu slot="profile-menu">
      <six-menu-item>Change password</six-menu-item>
      <six-menu-item>Logout</six-menu-item>
    </six-menu>
    <six-avatar
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        slot="profile-avatar"
    ></six-avatar>

  </six-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SixHeader, SixSearchField, SixIconButton, SixBadge, SixMenu, SixMenuItem, SixAvatar } from '@six/ui-library-vue';

export default defineComponent({
  name: 'AppHeader',
  components: { SixHeader, SixSearchField, SixIconButton, SixBadge, SixMenu, SixMenuItem, SixAvatar },
  props: ['notifications']
});
</script>

<style scoped lang="scss">
six-header {
  six-badge:not([type="danger"])::part(base) {
    background: none;
  }
}
</style>
