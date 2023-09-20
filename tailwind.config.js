/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      display: ["Poiret One", "serif"],
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
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

