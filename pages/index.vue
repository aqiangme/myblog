<template>
  <div class="guide">
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
  </div>
</template>
<script>
import VHeader from '~/components/header'
import VMain from '~/components/main'
import VFooter from '~/components/footer'
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: this.$t('seo.home.title'),
      ...i18nSeo
    }
  },
  components: { VHeader, VMain, VFooter }
}
</script>
