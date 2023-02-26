/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      'sora': ['Sora' , 'sans-serif']
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'sidebar': '#f2f2f3',
        'sidebarActive': '#e9e9eb',
        darkBlue: '#090F24',
        topGradient: '#9487FF40',
      },
    },
  },
  plugins: [],
}