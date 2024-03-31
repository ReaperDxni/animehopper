<script lang="ts" setup>
const props = defineProps<{
  label: string
}>()

const mappedImages: Record<string, string> = {
  'One Piece': 'https://cdn.anisearch.de/images/anime/cover/2/2227_600.webp',
  Naruto: 'https://static.printler.com/cache/1/d/1/6/3/2/1d16328afbff8b7fb8d52d5bfb84d9540cd24204.jpg',
  'Solo Leveling': 'https://m.media-amazon.com/images/M/MV5BYWMwYmYwNjMtMmE0MC00ODdhLTgzYzQtYzA3MDQ5OWRmZWNhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg'
}
</script>

<template>
  <div class="py-2 flex gap-2">
    <img :src="mappedImages[props.label]" width="48px" height="48px">
    <div class="flex flex-col">
      <h3 class="text-lg font-semibold text-gray-300">
        {{ props.label }}
      </h3>
      <span class="text-gray-400">Episodes: 13</span>
    </div>
  </div>
</template>
