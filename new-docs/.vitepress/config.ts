import { defineConfig } from 'vitepress';
// import { withMermaid } from "vitepress-plugin-mermaid"; https://emersonbottero.github.io/vitepress-plugin-mermaid/guide/getting-started.html

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Six Webcomponents',
  description: 'The documentation of the SIX Webcomponents library',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        link: '/guide/readme',
        activeMatch: '/guide/',
      },
      { text: 'Examples', link: '/markdown-examples' },
      /*      {
        text: 'Components',
        link: '/components/' + require('../components/component.tags.json')[0],
      },*/
      {
        text: 'Changelog',
        link: '/CHANGELOG',
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Info', link: '/guide/readme' },
          { text: 'Upgrade to v4', link: '/guide/upgrade-v4' },
          { text: 'Design', link: '/guide/design' },
          { text: 'Architecture', link: '/guide/architecture' },
          { text: 'Angular', link: '/guide/angular' },
          { text: 'React', link: '/guide/react' },
          { text: 'About us', link: '/guide/about-us' },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/six-group/six-webcomponents' }],
  },
});
