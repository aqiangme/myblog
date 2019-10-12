<template>
  <section>
    <b-navbar variant="dark" type="dark">
      <b-container>
        <b-navbar-brand>
          {{ $t('navber.brand') }}
          <small>{{ $t('navber.subBrand') }}</small>
        </b-navbar-brand>
        <!-- <b-navbar-toggle target="nav-callapse"></b-navbar-toggle> -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>{{ $t('navber.home') }}</b-nav-item>
          <b-nav-item>{{ $t('navber.posts') }}</b-nav-item>
          <b-nav-item>{{ $t('navber.log') }}</b-nav-item>
          <b-nav-item-dropdown
            v-for="item in availableLocales"
            :key="item.code"
            :text="item.name"
          >
            <b-dropdown-item>
              <nuxt-link :to="switchLocalePath('zh')">简体中文</nuxt-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </section>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)
    }
  },
  mounted() {
    // console.info('初始化完成', this.$i18n.locale)
    // this.$root.$on('bv::dropdown::show', (bvEvent) => {
    //   console.log('Dropdown is about to be shown', bvEvent)
    // })
  }
}
</script>
