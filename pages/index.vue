<script lang="ts" setup>
const recommendations = [
  {
    title: 'Solo Leveling',
    description: 'Best Anime and Manwha in wörld',
    image: 'https://img.anime2you.de/2023/03/solo-leveling.jpg',
    rating: 5
  },
  {
    title: 'Attack on Titan',
    description: 'When angry boy becomes titan to kill titan wattafak',
    image: 'https://i.pinimg.com/originals/7a/0d/c2/7a0dc24f568b81a39ba1ce797f65d355.jpg',
    rating: 5
  },
  {
    title: 'Seven deadly sins',
    description: 'gawno',
    image: 'https://static.bandainamcoent.eu/high/seven-deadly-sins/seven-deadly-sins/00-page-setup/sds_game-thumbnail.jpg',
    rating: 3
  },
  {
    title: 'Jojos Bizzare Adventure',
    description: 'Gay men fights more gay men',
    image: 'https://p325k7wa.twic.pics/high/jojo/jojo-bizarre-adventure-all-star-battle-r/jojo-header-mobile.jpg?twic=v1/resize=760/step=10/quality=80',
    rating: 5
  }
]
</script>

<template>
  <div class="overflow-x-hidden">
    <n-carousel
      class="mt-4 w-full"
      effect="card"
      prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
      next-slide-style="transform: translateX(50%) translateZ(-800px);"
      style="height: 480px"
      :show-dots="false"
    >
      <n-carousel-item v-for="recommendation in recommendations" :key="recommendation.title" :style="{ width: '60%' }">
        <div class="absolute w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end text-white p-10">
          <h1 class="text-xl text-gray-300 font-bold">
            {{ recommendation.title }}
          </h1>
          <n-rate readonly :default-value="recommendation.rating" />
          <p class="text-gray-400 w-1/2">
            {{ recommendation.description }}
          </p>
        </div>
        <img
          class="w-full h-full object-cover"
          :src="recommendation.image"
        >
      </n-carousel-item>
    </n-carousel>
    <div class="w-9/12 mx-auto">
      <n-divider title-placement="left">
        <h1 class="text-xl font-bold text-gray-300">
          Popular Animes
        </h1>
      </n-divider>
      <div class="w-full flex justify-center my-10 gap-10">
        <RecommendationCard
          title="Solo Leveling"
          description="Best Anime and Manwha in wörld"
          :rating="5"
          :seasons="1"
          :episodes="13"
          image="https://m.media-amazon.com/images/M/MV5BYWMwYmYwNjMtMmE0MC00ODdhLTgzYzQtYzA3MDQ5OWRmZWNhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
        />
      </div>
    </div>
  </div>
</template>
