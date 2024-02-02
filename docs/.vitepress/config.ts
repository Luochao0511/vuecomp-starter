import { defineConfig } from 'vitepress'
import { sidebar } from './config/sidebar'
import {mdPlugin} from './config/plugins.ts'

export default defineConfig({
  title: `vuecomp-starter`,
  description: 'vuecomp-starter',
  base: '/vuecomp-starter/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
  ],
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present The Muse Catcher',
    },

    nav: [
      { text: '组件', link: '/guide/features', activeMatch: '/guide/' },
      { text: 'API', link: '/api/introduce', activeMatch: '/api/' },
      {
        text: '链接',
        items: [
          { text: 'Github', link: 'https://github.com/windlil/vuecomp-starter' },
          {
            items: [
              {
                text: 'vue',
                link: 'https://cn.vuejs.org/',
              },
              {
                text: 'vitepress',
                link: 'https://vitepress.dev/',
              }
            ]
          }
        ]
      }
    ],
    sidebar,
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  },
})
