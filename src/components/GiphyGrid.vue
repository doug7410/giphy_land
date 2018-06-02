<template>
  <div>
    <giphy-card v-for="giph in giphs" :key="giph.id" :giph="giph"/>
  </div>

</template>

<script>
  import GiphyCard from './GiphyCard'
  import { mapGetters } from 'vuex'

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