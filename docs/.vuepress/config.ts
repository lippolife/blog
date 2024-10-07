import { defineUserConfig } from 'vuepress'

import theme from './theme.js'

export default defineUserConfig({
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: 'https://kenalvida.com/images/logo/favicon.ico',
      },
    ],
  ],

  locales: {
    '/': {
      lang: 'id-ID',
      description:
        'Health coverage tailor for you and your family needs. Digital insurance with inpatient, outpatient, dental and maternity benefits. Easy process via apps.',
    },
    '/en/': {
      lang: 'en-US',
      description:
        'Health coverage tailor for you and your family needs. Digital insurance with inpatient, outpatient, dental and maternity benefits. Easy process via apps.',
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
})
