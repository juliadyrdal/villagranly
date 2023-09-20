
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "nuxt-swiper",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "no",
        name: "Norsk",
      },
    ], // used in URL path prefix
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: false,
    },
  },
  swiper: {
    // Swiper options
    //----------------------
    prefix: "Swiper",
    // styleLang: 'css',
    modules: ["navigation", "pagination", "a11y", "virtual", "thumbs", "autoplay"], // all modules are imported by default
  },
  googleFonts: {
    families: {
      Roboto: true,
      "Playfair+Display": [400, 500, 700],
      Lato: [100, 300],
      Inter: {
        wght: [100, 300, 400, 500, 600, 700],
        ital: [100, 300],
      },
      "Poiret One": [400],
    },
  },
});
