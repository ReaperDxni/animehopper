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
    title: 'Seven Deadly Sins',
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
const popularAnimes = [
  {
    title: 'Solo Leveling',
    description: 'Best Anime and Manwha in wörld',
    image: 'https://m.media-amazon.com/images/M/MV5BYWMwYmYwNjMtMmE0MC00ODdhLTgzYzQtYzA3MDQ5OWRmZWNhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    rating: 5,
    seasons: 1,
    episodes: 13

  },
  {
    title: 'Attack on Titan',
    description: 'When angry boy becomes titan to kill titan wattafak',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzU_3j4ivd-S9LBSrljqPJLYjNpm2VFOmIpg&s',
    rating: 5,
    seasons: 4,
    episodes: 72
  },
  {
    title: 'Seven Deadly Sins',
    description: 'gawno',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxWqa1EF8bc4x5KMuQP3pRGoMVBWQj8piDzA&s',
    rating: 3,
    seasons: 5,
    episodes: 100
  },
  {
    title: 'Jojos Bizzare Adventure',
    description: 'Gay men fights more gay men',
    image: 'https://i.ebayimg.com/images/g/t10AAOSwimBjjREd/s-l1200.webp',
    rating: 5,
    seasons: 6,
    episodes: 158
  },
  {
    title: 'Sword Art Online',
    description: 'first season good after that its shit',
    image: 'https://cdn.anisearch.de/images/anime/cover/7/7335_600.webp',
    rating: 3,
    seasons: 3,
    episodes: 96
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
          Recent Animes
        </h1>
      </n-divider>
      <div class="w-full flex justify-center my-10 gap-10">
        <RecommendationCard
          v-for="anime in popularAnimes"
          :key="anime.title"
          :title="anime.title"
          :description="anime.description"
          :rating="anime.rating"
          :seasons="anime.seasons"
          :episodes="anime.episodes"
          :image="anime.image"
        />
      </div>
    </div>
    <div class="w-9/12 mx-auto">
      <n-divider title-placement="center">
        <h1 class="text-xl font-bold text-gray-300">
          Popular Animes
        </h1>
      </n-divider>
      <div class="w-full flex justify-center my-10 gap-10">
        <RecommendationCard
          v-for="anime in popularAnimes"
          :key="anime.title"
          :title="anime.title"
          :description="anime.description"
          :rating="anime.rating"
          :seasons="anime.seasons"
          :episodes="anime.episodes"
          :image="anime.image"
        />
      </div>
    </div>
    <div class="w-9/12 mx-auto">
      <n-divider title-placement="right">
        <h1 class="text-xl font-bold text-gray-300">
          Hentai Animes
        </h1>
      </n-divider>
      <div class="w-full flex justify-center my-10 gap-10">
        <RecommendationCard
          v-for="anime in popularAnimes"
          :key="anime.title"
          :title="anime.title"
          :description="anime.description"
          :rating="anime.rating"
          :seasons="anime.seasons"
          :episodes="anime.episodes"
          :image="anime.image"
        />
      </div>
    </div>
  </div>
</template>
