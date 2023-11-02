export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: ['@nuxt-themes/alpine'],

  runtimeConfig: {
    public: {
      FORMSPREE_URL: 'https://formspree.io/f/xknlejzw'
    }
  },

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ]
})
