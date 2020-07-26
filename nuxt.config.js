export default {
  env: 'production',
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Hello! call me if you need some app',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'My name is dhevan you can call me if you need some app',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'Hello! call me if you need some app',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: 'https://dhevanthareza.github.io',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: '/images/preview.png',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content:
          'My name is dhevan you can call me if you need some app',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
      },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/59c77235dc.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '@/plugins/aos', ssr: false }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/vuetify',
      {
        treeShake: true,
        // customVariables: ['~/assets/variables.scss'],
        defaultAssets: {
          font: {
            family: 'Montserrat',
          },
        },
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  // vuetify: {

  // }
}
