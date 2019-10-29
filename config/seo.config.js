export const head = {
  title: '我的博客',
  htmlAttrs: {
    xmlns: 'http://www.w3.org/1999/xhtml',
    lang: 'zh-CN'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'author', content: 'aqiang, xiamen' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'aqiang,啊强,我的博客,前端开发,javascript技术'
    },
    { hid: 'keyworld', name: 'keyworld', content: '以梦为马，浪迹天涯' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'http://at.alicdn.com/t/font_1480962_p8kdvaji6ij.css'
    }
  ],
  noscript: [{ innerHTML: 'This website requires JavaScript.' }]
}

export default {
  head
}
