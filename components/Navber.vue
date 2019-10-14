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
            <b-dropdown-item data-lang="zh" @click="toggleLocale">
              简体中文
            </b-dropdown-item>
            <b-dropdown-item data-lang="en" @click="toggleLocale">
              English
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
  methods: {
    toggleLocale(data) {
      this.$i18n.locale = data.target.getAttribute(`data-lang`)
    }
  }
}
</script>
