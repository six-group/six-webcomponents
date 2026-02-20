<script setup lang="ts">
import { SixPaginator, SixAlert, SixIcon } from '@six-group/ui-library-vue';
import type { SixPaginatorPageChangedPayload, SixPaginatorResultsPerPageChangedPayload } from '@six-group/ui-library';
import { ref } from 'vue';

const onpagechanged = (event: CustomEvent<SixPaginatorPageChangedPayload>) => {
  console.log('Page changed', event.detail);
  currentPage.value = event.detail.idx;
};

const onResultsPerPage = (event: CustomEvent<SixPaginatorResultsPerPageChangedPayload>) => {
  console.log('Results per page changed', event.detail);
};

const totalPages = ref(10);
const currentPage = ref(3);
</script>

<template>
  <div class="home">
    <h1>Demo</h1>
    <p>
      <b>Vue Demo App</b> using
      <a type="link" href="https://www.npmjs.com/package/@six-group/ui-library-vue">@six-group/ui-library-vue</a>
    </p>
  </div>
  <!-- :clamp="false" -->
  <six-paginator
    :total-pages="totalPages"
    :total-results="500"
    :results-per-page-options="[1, 5, 10]"
    :current-page="currentPage"
    @six-paginator-page-changed="onpagechanged"
    @six-paginator-results-per-page-changed="onResultsPerPage"
  >
  </six-paginator>
</template>

<style scoped>
.home {
  text-align: center;
}
a {
  color: var(--six-color-action-500);
}
</style>
