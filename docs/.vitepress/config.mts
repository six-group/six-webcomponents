import { defineConfig } from 'vitepress';
import { components } from '../components/component.tags.mjs';

const componentNavItems = components.map((component) => {
  return { text: component, link: `/components/${component}` };
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  appearance: false,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: 'Web Components',
  description: 'Component Library following the SIX Style Guide',

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '/six-logo.svg',
    nav: [
      {
        text: 'Guide',
        link: '/guide/readme',
        activeMatch: '/guide/',
      },
      { text: 'Components', link: componentNavItems[0].link },
      { text: 'Changelog', link: '/changelog' },
    ],

    sidebar: {
      '/guide/': [
        {
          items: [
            { text: 'Introduction', link: '/guide/readme' },
            { text: 'Upgrade to v4', link: '/guide/upgrade-v4' },
            { text: 'Design', link: '/guide/design' },
            { text: 'Architecture', link: '/guide/architecture' },
            { text: 'Angular', link: '/guide/angular' },
            { text: 'React', link: '/guide/react' },
          ],
        },
      ],

      '/components/': [{ items: componentNavItems }],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/six-group/six-webcomponents' }],
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('six-'),
      },
    },
  },
});
