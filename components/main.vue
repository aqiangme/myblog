<template>
  <b-container>
    <b-row>
      <b-col xl="8" lg="8" md="8" sm="8">
        <v-post-lists></v-post-lists>
      </b-col>
      <b-col xl="4" lg="4" md="4" sm="4" class="d-none d-sm-block">
        <v-aside></v-aside>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import VPostLists from '~/components/postLists'
import VAside from '~/components/aside'
export default {
  components: { VPostLists, VAside }
}
</script>
