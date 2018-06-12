<template>
  <div>
    <header class="header flex items-center bg-black text-white min-h-24 p-2">
      <div class="w-1/5 text-2xl text-green-light text-center">Giphy Land!</div>
      <search/>
      <favorites />
    </header>
    <section class="p-4">
      <search-info />
      <giphy-grid />
    </section>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Favorites from './components/Favorites'
  import SearchInfo from './components/SearchInfo'
  import GiphyGrid from './components/GiphyGrid'

  export default {
    name: 'app',
    components: {
      Search,
      Favorites,
      SearchInfo,
      GiphyGrid
    }
  }
</script>

