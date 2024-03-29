// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@bg-dev/nuxt-naiveui',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  typescript: {
    shim: false
  },
  naiveui: { colorModePreference: 'dark' },
  tailwindcss: {
    exposeConfig: true,
    config: {
      theme: {
        extend: {
          colors: {
            backcolor: '#0A090C',
            lightbackcolor: '#0F0D11',
            primary: '#D62828',
            secondary: '#60D394'
          }
        }
      }
    }
  },
  devtools: { enabled: true },
  googleFonts: { families: { Rubik: true } }
})
