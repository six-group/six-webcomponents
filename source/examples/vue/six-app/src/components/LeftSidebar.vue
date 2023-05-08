<template>
  <six-sidebar position="left" :open="open">
    <RouterLink to="/">
      <six-sidebar-item-group icon="home" name="Home"></six-sidebar-item-group>
    </RouterLink>

    <RouterLink to="/users">
      <six-sidebar-item-group icon="supervisor_account" name="Users"></six-sidebar-item-group>
    </RouterLink>
  </six-sidebar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SixSidebar, SixSidebarItemGroup } from '@six-group/ui-library-vue';

export default defineComponent({
  name: 'AppLeftSidebar',
  components: { SixSidebar, SixSidebarItemGroup },
  props: ['open'],
});
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
