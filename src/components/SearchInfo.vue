<template>
  <div class="text-center">
    <span class="text-3xl text-purple font-bold">#{{ currentSearch }}</span> -
    <a v-if="currentSearchIsInFavorites" href="#" @click.prevent="removeFavorite(currentSearch)">Remove from favorites</a>
    <a  v-else href="#" @click.prevent="addFavorite(currentSearch)">+ Add to favorites</a>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: "search-info",
    computed: mapGetters(['currentSearch', 'currentSearchIsInFavorites']),
    methods: mapActions(['addFavorite', 'removeFavorite'])
  }
</script>
