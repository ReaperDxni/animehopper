<template>
  <nav class="w-screen h-16 bg-lightbackcolor flex justify-between items-center px-12">
    <div class="flex items-center space-x-12">
      <h1 class="font-bold text-2xl text-gray-200 hover:cursor-pointer">
        ANIME<span class="text-primary">HOPPER</span>
      </h1>
      <div class="space-x-8">
        <NuxtLink class="text-gray-300 font-semibold text-xl hover:cursor-pointer hover:text-gray-400 transition-all">
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
      <n-input class="bg-backcolor" size="medium" maxlength="60" placeholder="Search...">
        <template #prefix>
          <Icon name="oui:search" />
        </template>
      </n-input>
    </div>
    <div class="flex items-center">
      <n-button type="error" ghost>
        Sign in
      </n-button>
    </div>
  </nav>
</template>
