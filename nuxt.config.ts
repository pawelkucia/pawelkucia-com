// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts'
  ],
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  googleFonts: {
    families: {
      'Geist Mono': [400, 500, 600, 700]
    },
    display: 'swap',
    preload: true,
    prefetch: true,
    preconnect: true,
    download: true,
    inject: true
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
  },
  build: {
    transpile: ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome']
  },
  app: {
    head: {
      title: 'Paweł Kucia - Full Stack Engineer',
      meta: [
        { name: 'description', content: 'Paweł Kucia Full Stack Engineer Portfolio' }
      ]
    }
  }
})