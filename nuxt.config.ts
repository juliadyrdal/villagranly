
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  site: {
    identity: {
      type: 'Organization'
    },
    url: 'https://villa-granly.no',
    name: 'Villa Granly',
    description: 'Unik og særpreget villa som gir assosiasjoner til vikingetidens høvdinggårder og tradisjonell stølsarkitektur. Villa Granly er omkranset av en vakker park med strandlinje til Kviturspollen.',
    defaultLocale: 'no',
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "nuxt-swiper",
    '@nuxtjs/google-fonts',
    '@nuxtseo/module',
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
