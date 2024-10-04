import { defineCustomElements } from '@six-group/ui-library/loader';
import { App, Plugin } from 'vue';
import { Router } from 'vue-router';

export type UiLibraryVueOptions = {
  router?: Router;
};

export const UiLibraryVue: Plugin = {
  async install(app: App, options?: UiLibraryVueOptions) {
    defineCustomElements();

    if (options?.router) {
      // The Stencil generated Vue components expect a navManager instance for router-link support.
      // See: ./stencil-generated/vue-component-lib/utils.ts for the router-link handling.
      const navManager = {
        navigate: (payload: { event: Event; routerLink: string }) => {
          options.router.push(payload.routerLink);
        },
      };
      app.provide('navManager', navManager);
    }
  },
};
