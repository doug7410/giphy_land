<template>
  <div v-masonry transition-duration="0.3s" item-selector=".item">

    <!--card-->
    <div v-masonry-tile v-for="giph in giphs" class="w-1/4 inline-flex item" :key="giph.id">
      <div class="m-2 bg-white overflow-hidden pb-2 shadow-xl rounded text-center">
        <img :src="giph.images.downsized_medium.url" class="max-w-full mb-2">
        <a href="#" target="_blank" class="text-blue hover:underline no-underline block">
          {{ giph.title }}
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "giphy-grid",
    computed: mapGetters(['giphs'])
  }
</script>

<style scoped>

</style>