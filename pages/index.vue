<script lang="ts" setup>
const recommendations = [
  {
    title: 'Solo Leveling',
    description: 'Follows the adventures Sung Jinwoo in a world that is constantly threatened by monsters and the evil forces. In his battles Sung transforms himself from weakest hunter of all mankind to one of the strongest hunters in existence.',
    image: 'https://m.media-amazon.com/images/M/MV5BYWMwYmYwNjMtMmE0MC00ODdhLTgzYzQtYzA3MDQ5OWRmZWNhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    rating: 5
  },
  {
    title: 'Attack on Titan',
    description: 'After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzU_3j4ivd-S9LBSrljqPJLYjNpm2VFOmIpg&s',
    rating: 5
  },
  {
    title: 'Seven Deadly Sins',
    description: 'The Seven Deadly Sins (七つの大罪, Nanatsu no Taizai) were the strongest and cruelest order of Holy Knights in the kingdom, formed by Meliodas and six other brutal criminals from various races who were branded symbols of beasts to symbolize the sin that motivated their crimes.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxWqa1EF8bc4x5KMuQP3pRGoMVBWQj8piDzA&s',
    rating: 3
  },
  {
    title: 'Jojos Bizzare Adventure',
    description: 'The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives. The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives.',
    image: 'https://i.ebayimg.com/images/g/t10AAOSwimBjjREd/s-l1200.webp',
    rating: 5
  }
]
const popularAnimes = [
  {
    title: 'Solo Leveling',
    description: 'Follows the adventures Sung Jinwoo in a world that is constantly threatened by monsters and the evil forces. In his battles Sung transforms himself from weakest hunter of all mankind to one of the strongest hunters in existence.',
    image: 'https://m.media-amazon.com/images/M/MV5BYWMwYmYwNjMtMmE0MC00ODdhLTgzYzQtYzA3MDQ5OWRmZWNhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    rating: 5,
    seasons: 1,
    episodes: 13

  },
  {
    title: 'Attack on Titan',
    description: 'After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzU_3j4ivd-S9LBSrljqPJLYjNpm2VFOmIpg&s',
    rating: 5,
    seasons: 4,
    episodes: 72
  },
  {
    title: 'Seven Deadly Sins',
    description: 'The Seven Deadly Sins (七つの大罪, Nanatsu no Taizai) were the strongest and cruelest order of Holy Knights in the kingdom, formed by Meliodas and six other brutal criminals from various races who were branded symbols of beasts to symbolize the sin that motivated their crimes.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxWqa1EF8bc4x5KMuQP3pRGoMVBWQj8piDzA&s',
    rating: 3,
    seasons: 5,
    episodes: 100
  },
  {
    title: 'Jojos Bizzare Adventure',
    description: 'The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives. The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives.',
    image: 'https://i.ebayimg.com/images/g/t10AAOSwimBjjREd/s-l1200.webp',
    rating: 5,
    seasons: 6,
    episodes: 158
  },
  {
    title: 'Sword Art Online',
    description: 'In 2022, a virtual reality massively multiplayer online role-playing game (VRMMORPG) called Sword Art Online (SAO) was released. With the NerveGear, a helmet that stimulates the users five senses via their brain, players can experience and control their in-game characters with their minds.',
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
