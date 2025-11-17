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

// Sync VitePress theme with HTML class
function syncThemeClass(isDark: boolean) {
  const htmlElement = document.documentElement;
  htmlElement.classList.remove('theme-light', 'theme-dark');
  htmlElement.classList.add(isDark ? 'theme-dark' : 'theme-light');
}

// Initialize theme class immediately on load (before Vue mounts)
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('vitepress-theme-appearance');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark =
    savedTheme === 'dark' || (savedTheme === 'auto' && prefersDark) || (!savedTheme && prefersDark);
  syncThemeClass(isDark);
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

    // Set initial theme class on mount
    onMounted(() => {
      syncThemeClass(isDark.value);
    });

    // Watch for theme changes and update HTML class
    watch(isDark, (newIsDark) => {
      syncThemeClass(newIsDark);
    });
  },
} satisfies Theme;
