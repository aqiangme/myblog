<template>
  <div>
    <b-navbar
      ref="ele"
      variant="dark"
      type="dark"
      toggleable="sm"
      class="fixed-top"
    >
      <b-container>
        <b-navbar-brand>
          {{ $t('navber.brand') }}
          <small>{{ $t('navber.subBrand') }}</small>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-callapse"></b-navbar-toggle>
        <b-collapse id="nav-callapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="localePath('index')">
              <span :class="{ active: this.$route.name === 'index' }">{{
                $t('navber.index')
              }}</span>
            </b-nav-item>
            <b-nav-item :to="localePath('posts')">
              <span :class="{ active: this.$route.name === 'posts' }">{{
                $t('navber.posts')
              }}</span>
            </b-nav-item>
            <b-nav-item :to="localePath('log')">
              <span :class="{ active: this.$route.name === 'log' }">{{
                $t('navber.log')
              }}</span>
            </b-nav-item>
            <b-nav-item-dropdown
              v-for="i in availableLocales"
              :key="i.code"
              :text="i.name"
            >
              <b-dropdown-item @click="toggleLocale('zh')">
                简体中文
              </b-dropdown-item>
              <b-dropdown-item @click="toggleLocale('en')">
                English
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <v-banner></v-banner>
  </div>
</template>

<script>
import VBanner from '~/components/banner'
export default {
  components: { VBanner },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)
    }
  },
  methods: {
    toggleLocale(locale) {
      // 切换到指定语言
      this.$i18n.setLocale(locale)
    }
  }
}
</script>
