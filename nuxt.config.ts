// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/style.css'],
  modules: ['nuxt-swiper'],
  app: {
    head: {
      title: 'YSJ_PF',
      htmlAttrs: {
        lang: 'en'
      },
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400&family=Ubuntu&display=swap'
      }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ]
    },
    buildAssetsDir: 'assets'
  }
})
