<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#D62828'
  },
  Input: {
    borderFocus: '1px solid #D62828',
    boxShadowFocus: 'none',
    colorFocus: 'none',
    borderHover: '1px solid #D62828',
    color: '#0A090C'
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
