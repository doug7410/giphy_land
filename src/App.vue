<template>
  <div>
    <!--header-->
    <header class="header flex items-center bg-black text-white min-h-24 p-2">

      <!--logo-->
      <div class="w-1/5 text-2xl text-green-light text-center">Giphy Land!</div>

      <!--search form-->
      <search-form />

      <!--favorites-->
      <favorites />
    </header>

    <section class="p-4">
      <!--search-info-->
      <search-info />

      <!--grid-->
      <giphy-grid />
    </section>
  </div>
</template>

<script>
import GiphyGrid from './components/GiphyGrid'
import SearchForm from './components/SearchForm'
import SearchInfo from './components/SearchInfo'
import Favorites from './components/Favorites'

export default {
  name: 'app',
  components: {
    GiphyGrid,
    SearchForm,
    SearchInfo,
    Favorites
  },
  created() {
    this.$store.dispatch('fetchGiphs', 'giphs')
  }
}
</script>

