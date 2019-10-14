import en from '../lang/en'
import zh from '../lang/zh'

export default {
  seo: true,
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'zh',
      iso: 'zh-CN',
      name: '  简体中文'
    }
  ],
  defaultLocale: 'zh',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, zh }
  }
}
