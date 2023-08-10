import { defineConfig } from 'vitepress'
import { components } from '../components/component.tags.mjs'

const navs = components.map(c => {
  return { text: c, link: `/components/${c}` }
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SIX Web Components",
  description: "Component Library following the SIX Style Guide",
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: navs[0].link }

    ],

    sidebar: [
      {text: 'Components', link:navs[0].link , items: navs},
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/six-group/six-webcomponents' }
    ]
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('six-')
      }
    }
  },
})
