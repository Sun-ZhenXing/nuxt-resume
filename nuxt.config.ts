// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ui
    '@vant/nuxt',

    // router
    'nuxt-typed-router',

    // store
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

    // css & style
    '@unocss/nuxt',
    '@nuxtjs/color-mode',

    // icons
    'nuxt-icon',

    // composables
    '@vueuse/nuxt',

    // utils
    '@nuxt/content',
  ],
  extends: [
    'nuxt-seo-kit',
  ],
  css: [
    '~/assets/style/main.scss',
  ],
})
