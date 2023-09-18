import eslintPlugin from 'vite-plugin-eslint';
export default defineNuxtConfig({
  app: {
    // https://nuxt.com/docs/api/configuration/nuxt-config#head
    head: {
      title: '', // Add global website title
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: '' }, // Add global description
        { hid: 'og:image', property: 'og:image', content: '' }, // Add link to global og:image
        { hid: 'og:title', property: 'og:title', content: '' }, // Add global og:title
        { hid: 'og:description', property: 'og:description', content: '' }, // Add global og:description
        { hid: 'og:site_name', property: 'og:site_name', content: '' }, // Add global og:site_name
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      noscript: [
        // Add no-script tag to head
        { children: 'JavaScript is required' },
      ],
    },
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config/#vite
  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";', // Globally auto import scss vars
        },
      },
    },
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config/#css
  css: ['@/assets/scss/_normalize.css', '@/assets/scss/_defaults.scss', '@/assets/scss/_tailwind.css'],

  // https://nuxt.com/modules
  modules: [
    '@nuxtjs/tailwindcss', // https://nuxt.com/modules/tailwindcss
    '@nuxt/image-edge', // https://v1.image.nuxtjs.org/configuration
    '@vueuse/nuxt', // https://vueuse.org/functions.html
    'nuxt-security',
    '@nuxtjs/robots',
  ],

  // https://tailwindcss.com/docs/configuration
  tailwindcss: {
    // Options
  },

  // https://v1.image.nuxtjs.org/configuration
  image: {
    // Options
  },
});
