<template>
  <div class="users">
    <header class="users-header">
      <six-icon size="large">supervisor_account</six-icon>
      <span class="users-header__title">Users</span>
      <p>
        Table could be constructed either from <code>ui-library</code> building blocks or directly supplying the data to
        <code>six-table</code> component.<br/>
        This demo app is using the first approach.
      </p>
    </header>
    <six-card class="users__table">
      <app-table :columns="columns" :users="users" @userSelected="selectUser"></app-table>
    </six-card>
    <six-drawer
        :label="`User #${selectedUser.id}`"
        :open="showDrawer"
        @six-drawer-overlay-dismiss="showDrawer=false"
        @six-drawer-after-hide="storeData"
    >
      <app-user-form :user="selectedUser"></app-user-form>
      <six-button slot="footer" @click="showDrawer=false">Submit</six-button>
    </six-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SixCard, SixIcon, SixDrawer, SixButton } from '@six/ui-library-vue';
import AppTable from '@/components/Table.vue';
import UserForm from '@/components/UserForm.vue';
import Service from '@/service';
import AppUserForm from '@/components/UserForm.vue';

export default defineComponent({
  name: 'Users',
  components: { AppUserForm, SixCard, SixIcon, SixDrawer, SixButton, AppTable, UserForm },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData' // call again the method if the route changes
  },
  methods: {
    async fetchData() {
      this.users = await Service.fetchUsers();
    },
    storeData() {
      console.log(JSON.stringify(this.selectedUser));
    },
    selectUser(selectedId: string) {
      const user = this.users.find( ({ id }) => id === selectedId );
      if (user) {
        this.selectedUser = user;
        this.showDrawer = true;
      }
    }
  },
  data() {
    return {
      columns: [
        { key: 'name', value: 'Name' },
        { key: 'email', value: 'E-Mail' },
        { key: 'phone', value: 'Phone' },
        { key: 'username', value: 'Username' },
        { key: 'website', value: 'Website' }
      ],
      users: [],
      selectedUser: {},
      showDrawer: false,
    }
  }
});
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
