<template>
  <div>
    <v-header></v-header>
    <div class="fload-header"><h4>header</h4></div>
    <div class="fload-container">
      <div class="fload-middle"><h4>middle</h4></div>
      <div class="fload-lett"><h4>lett</h4></div>
      <div class="fload-right"><h4>right</h4></div>
    </div>
    <div class="fload-footer"><h4>footer</h4></div>
    <hr />
    <div class="flex-header"><h4>flex-header</h4></div>
    <div class="flex-container">
      <div class="left"><h4>left</h4></div>
      <div class="middle"><h4>middle</h4></div>
      <div class="right"><h4>right</h4></div>
    </div>
    <div class="flex-foot"><h4>flex-foot</h4></div>
  </div>
</template>

<script>
import VHeader from '~/components/header'
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: this.$t('seo.posts.title'),
      meta: [...i18nSeo.meta]
    }
  },
  components: { VHeader }
}
</script>

<style scoped lang="scss">
.fload-header,
.fload-footer {
  text-align: center;
}
.fload-header {
}
.fload-container {
  overflow: hidden;
  padding: 0 250px 0 200px;
  .fload-lett,
  .fload-middle,
  .fload-right {
    position: relative;
    float: left;
    min-height: 150px;
  }
  .fload-lett {
    margin-left: -100%;
    left: -200px;
    width: 200px;
    // background-color: red;
  }
  .fload-middle {
    width: 100%;
    // background-color: yellow;
  }
  .fload-right {
    width: 250px;
    margin-left: -250px;
    right: -250px;
    // background-color: green;
  }
}
.fload-footer {
  clear: both;
}
.flex-header,
.flex-foot {
  text-align: center;
}
.flex-header {
}
.flex-container {
  display: flex;
  .left {
    width: 200px;
  }
  .middle {
    flex: 1;
  }
  .right {
    width: 220px;
  }
}
.flex-foot {
}
</style>
