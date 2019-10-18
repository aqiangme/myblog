import en from '../lang/en'
import zh from '../lang/zh'

export default {
  seo: true,
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
  vueI18n: {
    fallbackLocale: 'zh',
    messages: { en, zh }
  }
}
