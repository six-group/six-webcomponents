<template>
  <six-form>
    <six-input label="Name" v-model="user.name" required />
    <six-input label="E-mail" type="email" v-model="user.email" required />
    <six-input label="Username" v-model="user.username" />
    <six-select label="Role" v-model="user.role">
      <six-menu-item value="admin">Administrator</six-menu-item>
      <six-menu-item value="user">User</six-menu-item>
      <six-menu-item>Not defined</six-menu-item>
    </six-select>
    <six-checkbox v-model="user.important">Important</six-checkbox>
    <six-input label="Password" type="password" v-model="user.password" required />
    <six-input label="Confirm password" type="password" required />
    <six-radio v-for="value in [1, 2, 3]" :key="value" name="radio" v-model="user.option" :checked="false">
      {{ 'Option ' + value }}
    </six-radio>
  </six-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SixCheckbox, SixForm, SixInput, SixMenuItem, SixRadio, SixSelect } from '@six-group/ui-library-vue';

export default defineComponent({
  name: 'AppUserForm',
  components: { SixForm, SixInput, SixSelect, SixMenuItem, SixCheckbox, SixRadio },
  props: ['user'],
});
</script>

<style scoped lang="scss">
six-input,
six-select,
six-checkbox {
  margin-bottom: 1rem;
}

six-radio {
  margin-right: 0.5rem;
}
</style>
