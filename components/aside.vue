<template>
  <div class="aside bg-white">
    <b-card
      img-top
      img-src="https://picsum.photos/1024/500/?image=94"
      title="啊强"
      sub-title="aqiangme"
      class="border-0 rounded-0"
    >
      <b-card-text>
        <b-link class="card-link iconfont icon-github-fill">
          <small> Guthub </small></b-link
        >
      </b-card-text>
    </b-card>
    <v-article></v-article>
    <v-calendar></v-calendar>
  </div>
</template>
<script>
import VArticle from '~/components/article'
import VCalendar from '~/components/calendar'
export default {
  name: 'LayoutsAside',
  components: { VArticle, VCalendar }
}
</script>
