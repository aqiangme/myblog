import en from '../lang/en'
import zh from '../lang/zh'

export default {
  seo: false,
  locales: [
    {
      code: 'zh',
      iso: 'zh-CN',
      name: '简体中文'
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    }
  ],
  strategy: 'no_prefix',
  defaultLocale: 'zh',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  },
  vueI18n: {
    fallbackLocale: 'zh',
    messages: { en, zh }
  }
}
