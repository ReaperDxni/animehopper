<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#D62828',
    primaryColorHover: '#b31e1e'
  },
  Input: {
    borderFocus: '1px solid #D62828',
    boxShadowFocus: 'none',
    colorFocus: 'none',
    borderHover: '1px solid #D62828',
    color: '#0A090C'
  },
  InternalSelectMenu: {
    color: '#0F0D11'
  }
}

</script>
<template>
  <div>
    <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
      <n-message-provider placement="bottom-right">
        <div class="bg-backcolor flex flex-col w-screen">
          <NavBar />
          <NuxtPage />
          <Footer />
        </div>
      </n-message-provider>
    </n-config-provider>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #383838;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #676767;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
