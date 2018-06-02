<template>
  <div class="w-1/4 inline-flex">
    <div class="m-2 bg-white overflow-hidden pb-2 shadow-xl rounded text-center">
      <img :src="giph.images.downsized_medium.url" class="max-w-full mb-2">
      <a href="#" target="_blank" class="text-blue hover:underline no-underline block">
        {{ giph.title }}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "giphy-card",
    props: ['giph']
  }
</script>
