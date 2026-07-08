// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import { defineCustomElements } from '@six-group/ui-library/loader';
import { Theme } from 'vitepress';
import { onMounted, watch } from 'vue';
import { useData } from 'vitepress';

// @ts-ignore
const modules = import.meta.glob('../../examples/**/*.vue', { eager: true });
const exampleComponents = [];
for (const path in modules) {
  exampleComponents.push(modules[path].default);
}

// Sync VitePress theme with the SIX theme attribute
function syncSixTheme(isDark: boolean) {
  document.documentElement.setAttribute('data-six-theme', isDark ? 'dark' : 'light');
}

// Initialize theme class immediately on load (before Vue mounts)
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('vitepress-theme-appearance');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark =
    savedTheme === 'dark' || (savedTheme === 'auto' && prefersDark) || (!savedTheme && prefersDark);
  syncSixTheme(isDark);
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }) {
    // define ui six library components
    defineCustomElements();

    // globally register vue example components
    exampleComponents.forEach((component) => {
      app.component(component.name, component);
    });
  },
  setup() {
    const { isDark } = useData();

    // Set initial theme on mount
    onMounted(() => {
      syncSixTheme(isDark.value);
    });

    // Watch for theme changes and update the attribute
    watch(isDark, (newIsDark) => {
      syncSixTheme(newIsDark);
    });
  },
} satisfies Theme;
