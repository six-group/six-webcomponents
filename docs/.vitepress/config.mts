import { components } from '../components/component.tags.mjs';
import { withMermaid } from 'vitepress-plugin-mermaid';

const componentNavItems = components.map((component) => {
  return {
    text: component
      .replace('six-', '')
      .split('-')
      .map((c) => c[0].toUpperCase() + c.slice(1))
      .join(' '),
    link: `/components/${component}`,
  };
});

// https://vitepress.dev/reference/site-config
export default withMermaid({
  ignoreDeadLinks: [/^https?:\/\/localhost/, './../wrappers/set-attributes'],
  appearance: false,
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  title: 'Web Components',
  description: 'Component Library following the SIX Style Guide',
  // keep this in sync with the target folder in the "Deploy Documentation" section of /.github/workflows/release.yml
  base: '/six-webcomponents/v4/',
  lastUpdated: true,

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '/six-logo.svg',
    search: {
      provider: 'local',
    },
    nav: [
      {
        text: 'Guide',
        link: '/guide/readme',
        activeMatch: '/guide/',
      },
      { text: 'Components', link: componentNavItems[0].link },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Go to v5 docs', link: 'https://six-group.github.io/six-webcomponents/v5/' },
    ],

    sidebar: {
      '/guide/': [
        {
          items: [
            { text: 'Introduction', link: '/guide/readme' },
            { text: 'Upgrade to v4', link: '/guide/upgrade-v4' },
            { text: 'Design', link: '/guide/design' },
            { text: 'Architecture', link: '/guide/architecture' },
            {
              text: 'Framework Integrations',
              collapsed: false,
              items: [
                { text: 'Angular', link: '/guide/angular' },
                { text: 'Vue', link: '/guide/vue' },
              ],
            },
            {
              text: 'Styling',
              collapsed: false,
              items: [
                { text: 'Styles', link: '/guide/styling/styles' },
                { text: 'Tables', link: '/guide/styling/tables' },
                { text: 'Colors', link: '/guide/styling/colors' },
                { text: 'TailwindCSS', link: '/guide/styling/tailwind' },
              ],
            },
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
