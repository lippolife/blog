import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
  '/en/': [
    '',
    'intro',
    {
      text: 'Articles',
      icon: 'book',
      prefix: 'posts/',
      children: 'structure',
    },
  ],
})
