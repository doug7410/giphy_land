<template>
  <div v-masonry transition-duration="0.3s" item-selector=".item">
    <giphy-card
      v-for="giph in giphs"
      :key="giph.id"
      :giph="giph"
      v-masonry-tile
      class="item"
    />
  </div>

</template>

<script>
  import GiphyCard from './GiphyCard'
  import { mapGetters } from 'vuex'
  import Vue from 'vue';
  import { VueMasonryPlugin } from 'vue-masonry';

  Vue.use(VueMasonryPlugin);

  export default {
    name: "giphy-grid",
    components: {
      GiphyCard
    },
    computed: mapGetters(['giphs'])
  }
</script>

<style scoped>

</style>