// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme';
import './style.css';
import { defineCustomElements } from '@six-group/ui-library/loader';

// @ts-ignore
const modules = import.meta.globEager('../../examples/**/*.vue');
const components = [];
for (const path in modules) {
  components.push(modules[path].default);
}
export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // define ui six library components
    defineCustomElements();
    components.forEach((component) => {
      app.component(component.name, component);
    });
  },
};
