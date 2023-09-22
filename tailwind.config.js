/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "theme-surface-light": "#F4F0EC",
        "theme-accent": "#CDA274",
        "theme-grey-dark": "#292F36",
      },
      spacing: {
        'img': '40rem',
      }
    },
  },
  plugins: [],
}

