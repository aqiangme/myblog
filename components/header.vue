<template>
  <div>
    <b-navbar type="dark" toggleable="sm" class="bd-navbar fixed-top">
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
            <b-nav-item :to="localePath('post')">
              <span :class="{ active: this.$route.name === 'post' }">{{
                $t('navber.post')
              }}</span>
            </b-nav-item>
            <b-nav-item :to="localePath('vlog')">
              <span :class="{ active: this.$route.name === 'vlog' }">{{
                $t('navber.vlog')
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
  name: 'LayoutsHeader',
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
