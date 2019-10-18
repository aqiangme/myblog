import i18n from './config/i18n.config'

export default {
  mode: 'universal',
  head: {
    // title: process.env.npm_package_name || '',
    title: 'Take dreams as horses and roam the world',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [{ src: '@/assets/styles/index.scss', lang: 'scss' }],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-i18n', i18n]
  ],
  axios: {},
  build: {
    extend(config, ctx) {}
  }
}
