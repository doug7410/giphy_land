<template>
  <div class="text-center">
    <span class="text-3xl text-purple font-bold">#{{ currentSearch }}</span>
    - <a href="#">+ Add to favorites</a>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "search-info",
    computed: mapGetters(['currentSearch'])
  }
</script>
