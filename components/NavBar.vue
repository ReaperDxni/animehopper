<script lang="ts" setup>
const { useUser } = useAuth()
const user = useUser()
</script>

<template>
  <nav class="w-screen h-16 bg-lightbackcolor flex justify-between items-center px-12">
    <div class="flex items-center space-x-12">
      <h1 class="font-bold text-2xl text-gray-200 hover:cursor-pointer">
        ANIME<span class="text-primary">HOPPER</span>
      </h1>
      <div class="space-x-8">
        <NuxtLink href="/" class="text-gray-300 font-semibold text-xl hover:cursor-pointer hover:text-gray-400 transition-all">
          Home
        </NuxtLink>
        <NuxtLink class="text-gray-300 font-semibold text-xl hover:cursor-pointer hover:text-gray-400 transition-all">
          Anime
        </NuxtLink>
        <NuxtLink class="text-gray-300 font-semibold text-xl hover:cursor-pointer hover:text-gray-400 transition-all">
          Manga
        </NuxtLink>
        <NuxtLink class="text-gray-300 font-semibold text-xl hover:cursor-pointer hover:text-gray-400 transition-all">
          Leaderboard
        </NuxtLink>
      </div>
    </div>
    <div class="w-96">
      <SearchBar />
    </div>
    <div class="flex items-center">
      <n-button v-if="!user" type="error" ghost @click="navigateTo('/auth/login')">
        Sign in
      </n-button>
      <ProfileUserButton v-else />
    </div>
  </nav>
</template>
