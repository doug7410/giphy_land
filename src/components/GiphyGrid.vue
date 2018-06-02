<template>
  <div>
    <giphy-card v-for="giph in giphs" :key="giph.id" :giph="giph"/>
  </div>

</template>

<script>
  import GiphyCard from './GiphyCard'

  export default {
    name: "giphy-grid",
    components: {
      GiphyCard
    },
    computed: {
      giphs() {
        return this.$store.getters.giphs;
      }
    }
  }
</script>

<style scoped>

</style>