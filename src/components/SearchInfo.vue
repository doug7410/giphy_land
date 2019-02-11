<template>
  <div class="text-center">
    <span class="text-3xl text-purple font-bold">#{{ currentSearch }}</span> -
    <a v-if="currentSearchIsInFavorites" href="#" @click.prevent="removeFavorite()">Remove from favorites</a>
    <a  v-else href="#" @click.prevent="addFavorite()">+ Add to favorites</a>
  </div>
</template>

<script>
  import { get, sync, call } from 'vuex-pathify'

  export default {
    name: "search-info",
    computed: {
      ...get(['currentSearch', 'currentSearchIsInFavorites']),
      ...sync(['favorites@favorites'])
    },
    methods: {
      ...call(['updateStorage']),
      addFavorite() {
        this.favorites.push(this.currentSearch)
        this.updateStorage()
      },
      removeFavorite(){
        const index = this.favorites.indexOf(this.currentSearch)
        this.favorites.splice(index, 1)
        this.updateStorage()
      }
    }
  }
</script>
