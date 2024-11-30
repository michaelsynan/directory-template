// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxthub/core",
  ],
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "dark",
  },
  image: {
    cloudflare: {
      baseURL: "https://imagedelivery.net/q2nIRgCuWuc2K4JgVsWp8w/",
    },
  },
  ui: {
    safelistColors: ["dino", "juju"],
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
