<template>
  <div class="w-2/5">
    <p>Your Favorites:</p>
    <button
      class="bg-green text-white py-1 px-2 m-1 rounded-full"
      v-for="favorite in favorites"
      :key="favorite"
      @click="fetchGiphs(favorite)"
    >
      #{{ favorite }}
    </button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: "favorites",
    computed: mapGetters(['favorites']),
    methods: mapActions(['fetchGiphs', 'fetchFavorites']),
    created() {
      this.fetchFavorites();
    }
  }
</script>
