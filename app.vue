<script setup>
import { darkTheme, GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#D62828'
  }
}
</script>
<template>
  <div>
    <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
      <NuxtPage />
    </n-config-provider>
  </div>
</template>
