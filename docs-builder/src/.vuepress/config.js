const path = require('path');
const { description } = require('../../package');
const { version, short } = require('./lib/version-details.json');

module.exports = {
  base: '/six-webcomponents/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Web Components',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#DE3919' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  alias: {
    lib: path.resolve(__dirname, './lib'),
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/assets/images/logo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Components',
        link: '/components/' + require('../components/component.tags.json')[0],
      },
      {
        text: 'Changelog',
        link: '/CHANGELOG',
      },
      {
        text: `v${version} ${version.includes('RC') ? short : ''}`,
        link: `https://github.com/six-group/six-webcomponents/tree/${version.includes("RC") ? '' : '?at=refs%2Ftags%2F' + version}`,
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: ['', 'design', 'architecture', 'angular', 'react', 'vue', 'aboutus'],
        },
      ],
      '/components/': [
        {
          title: 'Components',
          collapsable: false,
          children: require('../components/component.tags.json'),
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom', 'vuepress-plugin-mermaidjs'],
};
