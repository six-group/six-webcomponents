import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@six-group/ui-library/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
