<template>
  <div class="post-lists bg-white rounded pl-4 pr-4">
    <div v-for="(items, index) in list" :key="index" class="post-lists-item">
      <h5 class="mt-0 text-purple pt-4">{{ items.title }}</h5>
      <div class="sub-title text-muted">{{ items.subTitle }}</div>
      <b-img-lazy :src="items.src" class="card-img" height="230px" alt="" />
      <p class="lead"></p>
      <div class="d-flex justify-content-end">
        <b-button variant="link">{{ $t('post.more') }}</b-button>
      </div>
    </div>
  </div>
</template>
<script>
const list = [
  {
    title: 'Media Title',
    subTitle: '2019-09-01 视频教程 React',
    src: '/images/1.jpg',
    text: 'Set the Set the Set the Set the'
  },
  {
    title: 'Media Title',
    subTitle: '2019-09-01 视频教程 React',
    src: '/images/1.jpg',
    text: 'Set the Set the Set the Set the'
  }
]
export default {
  name: 'LayoutsPostList',
  data: () => ({
    list: []
  }),
  mounted() {
    this.list = list
  }
}
</script>
