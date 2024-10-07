import { sidebar } from 'vuepress-theme-hope'

export const idSidebar = sidebar({
  '/': [
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
