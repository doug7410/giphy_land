<template>
  <div class="w-2/5">
    <p>Your Favorites:</p>
    <button @click="fetchGiphs(favorite)"
            v-for="favorite in favorites"
            :key="favorite"
            class="bg-green text-white py-1 px-2 m-1 rounded-full">
      #{{ favorite }}
    </button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: "favorites",
    computed: mapGetters(['favorites']),
    methods: mapActions(['fetchGiphs'])
  }
</script>

<style scoped>

</style>