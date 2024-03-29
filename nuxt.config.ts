// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@bg-dev/nuxt-naiveui',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  typescript: {
    shim: false
  },
  tailwindcss: {
    exposeConfig: true,
    config: {
      theme: {
        extend: {
          colors: {
            backcolor: '#0A090C',
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
