<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" name="{{ column.key }}">
          {{ column.value }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" @click="$emit('userSelected', user.id)">
        <td v-for="column in columns">
          {{ user[column.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTable',
  components: {},
  props: ['columns', 'users'],
});
</script>

<style scoped lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  font-size: var(--six-font-size-small);
  padding: var(--six-spacing-small) var(--six-spacing-x-small);
  color: var(--six-color-web-rock-900);
}

th {
  text-align: left;
}

td {
  cursor: pointer;
  border-top: 1px solid var(--six-color-web-rock-400);
  overflow: hidden;
}
</style>
