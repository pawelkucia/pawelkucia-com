// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
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
        { name: 'description', content: 'Full Stack Engineer Portfolio' }
      ]
    }
  }
})