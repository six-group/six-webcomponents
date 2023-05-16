<template>
  <div class="users">
    <header class="users-header">
      <six-icon size="large">supervisor_account</six-icon>
      <span class="users-header__title">Users</span>
    </header>
    <six-card class="users__table">
      <AppTable :columns="columns" :users="users" :loading="loadingUsers" @userSelected="selectUser"></AppTable>
    </six-card>
    <six-drawer
      v-if="selectedUser"
      :label="`User #${selectedUser.id}`"
      :open="showDrawer"
      @six-drawer-overlay-dismiss="onDrawerDismiss"
      @six-drawer-after-hide="storeData"
    >
      <AppUserForm :user="selectedUser"></AppUserForm>
      <six-button slot="footer" @click="showDrawer = false">Submit</six-button>
    </six-drawer>
    <pre>{{ selectedUser }}</pre>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref, watch, type Ref } from 'vue';
import { SixButton, SixCard, SixDrawer, SixIcon } from '@six-group/ui-library-vue';
import AppTable from '@/components/Table.vue';
import AppUserForm from '@/components/UserForm.vue';
import Service, { type User } from '@/service';
import { useRoute } from 'vue-router';

defineComponent({
  name: 'Users',
});

const users: Ref<User[]> = ref([]);
const selectedUser: Ref<User | null> = ref(null);
const showDrawer: Ref<boolean> = ref(false);

const columns: { key: string; value: string }[] = [
  { key: 'name', value: 'Name' },
  { key: 'email', value: 'E-Mail' },
  { key: 'phone', value: 'Phone' },
  { key: 'username', value: 'Username' },
  { key: 'website', value: 'Website' },
];

const loadingUsers = ref(false);

const route = useRoute();

const fetchData = async () => {
  loadingUsers.value = true;
  users.value = await Service.fetchUsers();
  loadingUsers.value = false;
};

const storeData = () => console.log(JSON.stringify(selectedUser.value));

const selectUser = (selectedId: number) => {
  const user = users.value.find(({ id }) => id === selectedId);
  if (user) {
    selectedUser.value = user;
    showDrawer.value = true;
  }
};

const onDrawerDismiss = () => {
  showDrawer.value = false;
  selectedUser.value = null;
};

onMounted(() => fetchData());

watch(route, () => fetchData());
</script>

<style scoped lang="scss">
.users {
  padding: 1rem;

  &__table {
    margin-top: 1rem;
    width: 100%;

    &--loading {
      min-height: 10rem;
    }
  }
}

.users-header {
  &__title {
    font-weight: bold;
    font-size: larger;
    position: relative;
    top: -0.6rem;
    margin-left: 0.6rem;
  }
  code {
    background: rgba(0, 0, 0, 0.04);
    padding: 0.2rem;
    border-radius: 3px;
    font-weight: bold !important;
  }
}
</style>
