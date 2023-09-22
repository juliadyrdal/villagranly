
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "nuxt-swiper",
    '@nuxtjs/google-fonts',
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
    // Options
  },
});
