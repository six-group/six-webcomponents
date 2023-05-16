<template>
  <div class="loader" v-if="props.loading" style="display: flex; justify-content: center">
    <SixSpinner></SixSpinner>
  </div>
  <table v-else>
    <thead>
      <tr>
        <th v-for="column in props.columns" name="{{ column.key }}">
          {{ column.value }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in props.users" @click="$emit('userSelected', user.id)">
        <td v-for="column in columns">
          {{ (user as any)[column.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import type { User } from '@/service';
import { SixSpinner } from '@six-group/ui-library-vue';

defineComponent({
  name: 'AppTable',
});

const props = defineProps<{
  columns: { key: string; value: string }[];
  users: User[];
  loading?: boolean;
}>();
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
