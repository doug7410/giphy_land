<template>
  <div>
    <!--header-->
    <header class="header flex items-center bg-black text-white min-h-24 p-2">

      <!--logo-->
      <div class="w-1/5 text-2xl text-green-light text-center">Giphy Land!</div>

      <!--search form-->
      <search-form />

      <!--favorites-->
      <div class="w-2/5">
        <p>Your Favorites:</p>
        <button class="bg-green text-white py-1 px-2 m-1 rounded-full">
          #giphs
        </button>
        <button class="bg-green text-white py-1 px-2 m-1 rounded-full">
          #cats
        </button>
        <button class="bg-green text-white py-1 px-2 m-1 rounded-full">
          #dogs
        </button>
      </div>
    </header>

    <section class="p-4">
      <!--search-info-->
      <div class="text-center">
        <span class="text-3xl text-purple font-bold">#giphs</span>
        - <a href="#">+ Add to favorites</a>
      </div>

      <!--grid-->
      <giphy-grid />
    </section>
  </div>
</template>

<script>
import GiphyGrid from './components/GiphyGrid'
import SearchForm from './components/SearchForm'

export default {
  name: 'app',
  components: {
    GiphyGrid,
    SearchForm
  },
  created() {
    this.$store.dispatch('fetchGiphs', 'giphs')
  }
}
</script>

