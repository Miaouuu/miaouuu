export default defineNuxtConfig({
  ssr: false,
  site: {
    url: 'https://miaouuu.co',
  },
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  modules: ['@unocss/nuxt', '@nuxt/content', 'nuxt-simple-robots', 'nuxt-simple-sitemap'],
  sitemap: {
    xslTips: false,
  },
  nitro: {
    prerender: {
      routes: ['/feed.xml'],
    },
  },
  content: {
    documentDriven: {
      layoutFallbacks: ['blog'],
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },
  unocss: {
    preflight: true,
  },
  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],
  css: ['@/assets/css/globals.css'],
  app: {
    head: {
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.bunny.net',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.bunny.net/css2?family=DM+Serif+Text&family=Fredoka+One&family=Outfit:wght@400;500&family=Poppins:wght@300;400;500&family=Righteous&family=Sanchez&display=swap',
        },
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          href: 'https://miaouuu.co/feed.xml',
        },
      ],
    },
  },
})
