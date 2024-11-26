// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxt/ui", "@nuxt/image"],
  colorMode: {
    preference: "dark",
  },
  ui: {
    safelistColors: ["dino", "juju"],
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
