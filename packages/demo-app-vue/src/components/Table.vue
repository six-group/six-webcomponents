<template>
  <six-table striped>
    <six-table-header>
      <six-table-header-cell v-for="column in columns" name="{{ column.key }}">
        {{ column.value }}
      </six-table-header-cell>
    </six-table-header>
    <six-table-row v-for="user in users" @click="$emit('userSelected', user.id)">
      <six-table-cell v-for="column in columns">
        {{ user[column.key] }}
      </six-table-cell>
    </six-table-row>
  </six-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SixTable, SixTableHeader, SixTableHeaderCell, SixTableCell, SixTableRow } from '@six-group/ui-library-vue';

export default defineComponent({
  name: 'AppTable',
  components: { SixTable, SixTableHeader, SixTableHeaderCell, SixTableCell, SixTableRow },
  props: ['columns', 'users'],
});
</script>

<style scoped lang="scss"></style>
