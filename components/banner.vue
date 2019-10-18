<template>
  <div :style="`background:url(${isOption.imgSrc})`">
    <!-- <b-img :src="isOption.imgSrc"></b-img> -->
    <h3 class="p-4">{{ isOption }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    isOption: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
