<template>
  <div>
    <v-header></v-header>
  </div>
</template>
<script>
import VHeader from '~/components/header'
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: this.$t('seo.log.title'),
      meta: [...i18nSeo.meta]
    }
  },
  components: { VHeader }
}
</script>
