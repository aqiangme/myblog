<template>
  <div class="article">
    <div class="article-title pt-2 pb-2">
      <span class="pl-4">
        {{ $t('article.text') }}
      </span>
    </div>
    <ul class="article-list list-unstyled mt-3">
      <li v-for="(items, index) in list" :key="index" class="pl-4 pb-3">
        <span>{{ items.index }}</span>
        <a class="btn-link text-muted text-small" href="">{{ items.text }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    list: [
      { index: 1, text: 'Cras justo odio' },
      { index: 2, text: 'Cras justo odio' },
      { index: 3, text: 'Cras justo odio' },
      { index: 4, text: 'Cras justo odio' },
      { index: 5, text: 'Cras justo odio' },
      { index: 6, text: 'Cras justo odio' },
      { index: 7, text: 'Cras justo odio' },
      { index: 8, text: 'Cras justo odio' }
    ]
  })
}
</script>
