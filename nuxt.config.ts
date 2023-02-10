// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    
    modules: [
      [
        '@storyblok/nuxt',
        {
          accessToken: 'uiHAQzxUn1tVtEmEZRrKZwtt',
        }
      ]
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })