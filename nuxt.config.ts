// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ui & style
    '@vant/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',

    // router
    'nuxt-typed-router',

    // store
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',

    // icons
    'nuxt-icon',

    // composables
    '@vueuse/nuxt',
    '@nuxtjs/device',

    // utils
    '@nuxt/content',
  ],
  extends: [
    'nuxt-seo-kit',
  ],
  ignore: [
    '**/*.stories.{js,ts,jsx,tsx}',
    '**/*.{spec,test}.{js,ts,jsx,tsx}',
    '**/*.d.ts',
    '.output',
    '**/-*.*',
    // watcher ignore docs/* to enhance performance
    'docs',
  ],
  css: [
    '~/assets/style/main.scss',
  ],
})
