// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import { defineCustomElements } from '@six-group/ui-library/loader';
import { Theme } from 'vitepress';

// @ts-ignore
const modules = import.meta.glob('../../examples/**/*.vue', { eager: true });
const exampleComponents = [];
for (const path in modules) {
  exampleComponents.push(modules[path].default);
  console.log(path);
}
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // define ui six library components
    defineCustomElements();

    // globally register vue example components
    exampleComponents.forEach((component) => {
      app.component(component.name, component);
    });
  },
} satisfies Theme;
