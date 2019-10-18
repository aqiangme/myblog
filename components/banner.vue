<template>
  <div
    class="banner"
    :style="`background: url('/images/${setSrc}') top center no-repeat;`"
  >
    <h3 class="p-4 text-white">{{ $t(setText) }}</h3>
  </div>
</template>
<script>
import { num } from '@/utils'
export default {
  computed: {
    setText() {
      return 'navber.' + this.$route.name
    },
    setSrc() {
      return num(1, 7) + '.jpg'
    }
  }
}
</script>
<style scoped lang="scss">
.banner {
  width: 100%;
  height: 10rem;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>
