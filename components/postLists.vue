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
import { list } from '~/utils/data'

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
