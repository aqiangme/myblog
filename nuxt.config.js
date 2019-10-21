import i18n from './config/i18n.config'
import { head } from './config/seo.config'

export default {
  mode: 'universal',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ...head
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
