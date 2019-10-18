<template>
  <div>
    <!-- class="fixed-top" -->
    <b-navbar ref="ele" variant="dark" type="dark" toggleable="sm">
      <b-container>
        <b-navbar-brand>
          {{ $t('navber.brand') }}
          <small>{{ $t('navber.subBrand') }}</small>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-callapse"></b-navbar-toggle>
        <b-collapse id="nav-callapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              {{ $t('navber.home') }}
            </b-nav-item>
            <b-nav-item>
              {{ $t('navber.posts') }}
            </b-nav-item>
            <b-nav-item>
              {{ $t('navber.log') }}
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
  </div>
</template>

<script>
export default {
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
