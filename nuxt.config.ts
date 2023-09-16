// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/style.css'
  ],
  modules: ['nuxt-swiper'],
  app: {
    head: {
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rowdies:wght@300&family=Ubuntu&display=swap'
      }]
    },
    baseURL: '',
    buildAssetsDir: 'assets'
  },
  devServer: {
    port: process.env.NODE_ENV === 'production' ? undefined : 5000
  }
})
