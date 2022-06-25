module.exports = {
  content: [
    "./src/**/*.{html,vue,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
