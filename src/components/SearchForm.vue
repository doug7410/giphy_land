<template>
  <input type="text"
         class="w-2/5 text-2xl p-3 text-blue mx-4"
         placeholder="Find Giphs"
         v-model="searchTerm"
         @keyup.enter="fetchGiphs(searchTerm)"
  />
</template>

<script>
  import { call } from 'vuex-pathify'

  export default {
    name: "search-form",
    data() {
      return {
        searchTerm: ''
      }
    },
    methods: call(['fetchGiphs'])
  }
</script>

<style scoped>

</style>