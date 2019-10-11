<template>
  <section>
    {{ $t('nav.home') }}

    <div>
      <nuxt-link :to="switchLocalePath('en')"
        ><b-button>English</b-button></nuxt-link
      >
      <nuxt-link :to="switchLocalePath('zh')"
        ><b-button>中文</b-button></nuxt-link
      >
    </div>
  </section>
</template>
