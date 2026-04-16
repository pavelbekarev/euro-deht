// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@pinia/nuxt", "@nuxt/image"],
  css: [
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
    "swiper/css/scrollbar",
    "swiper/css/autoplay",
  ],
  ssr: false,

  routeRules: {
    "/**": { ssr: false },
  },
});
