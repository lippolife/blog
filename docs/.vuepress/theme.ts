import { hopeTheme } from 'vuepress-theme-hope'

import { idNavbar, enNavbar } from './navbar/index.js'
import { idSidebar, enSidebar } from './sidebar/index.js'

export default hopeTheme({
  hostname: 'https://blog.kenalvida.com',

  author: {
    name: 'Lippo Life Assurance',
    url: 'https://kenalvida.com',
  },

  iconAssets: 'fontawesome-with-brands',

  logo: 'https://kenalvida.com/images/logo/logo-Vida.svg',

  docsDir: 'src',

  blog: {
    medias: {
      // if you want to use external service
      // key: 'https://example.com/your-service',
      facebook: 'https://www.facebook.com/Kenal-Vida-ID-101510099004529/',
      instagram: 'https://instagram.com/kenalvida.id',
      twitter: 'https://twitter.com/kenalvida_id',
      douyin: 'https://www.tiktok.com/@kenalvida.id',
    },
  },

  locales: {
    '/': {
      // navbar
      navbar: idNavbar,

      // sidebar
      sidebar: idSidebar,

      // footer: 'XXX',

      displayFooter: true,

      blog: {
        description: 'Healthcare Your Way',
        intro: '/intro.html',
      },

      // metaLocales: {
      //   editLink: 'Edit this page on GitHub',
      // },
    },

    /**
     * English locale config
     */
    '/en/': {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      // footer: '默认页脚',

      displayFooter: true,

      blog: {
        description: 'Healthcare Your Way',
        intro: '/en/intro.html',
      },

      // page meta
      // metaLocales: {
      //   editLink: '在 GitHub 上编辑此页',
      // },
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ['Badge', 'VPCard'],
    },

    // These features are enabled for demo, only preserve features you need here
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    // markdownMath: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // This features is enabled for demo, only preserve if you need it
    markdownTab: true,

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              }
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },
})
