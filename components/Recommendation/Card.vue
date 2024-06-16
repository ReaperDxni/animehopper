<script setup lang="ts">
const props = defineProps<{
    image: string
    title: string
    description: string
    rating: number
    seasons: number
    episodes: number
}>()
</script>

<template>
  <div class="h-96 w-64 relative">
    <div class="absolute hover:bg-black/85 opacity-0 hover:opacity-100 w-full h-full transition flex justify-between flex-col p-3">
      <div class="flex justify-start flex-col">
        <h1 class="text-gray-300 text-lg font-bold">
          {{ props.title }}
        </h1>
        <n-rate readonly :default-value="props.rating" />
        <p class="text-gray-400">
          {{ props.seasons }} Episodes
        </p>
        <p class="text-gray-400">
          {{ props.episodes }} Season
        </p>
        <p class="text-gray-300">
          {{ props.description }}
        </p>
      </div>
      <div class="flex">
        <n-button quaternary type="error">
          <template #icon>
            <Icon name="material-symbols:search" />
          </template>
        </n-button>
        <n-button quaternary type="error">
          <template #icon>
            <Icon name="material-symbols:bookmark-add" />
          </template>
        </n-button>
      </div>
    </div>
    <img :src="props.image" alt="image" class="w-full h-full object-cover rounded-sm shadow-sm">
  </div>
</template>
