/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'headerbg': "url('/src/images/mobile/image-hero.jpg')",
      }
    },
  },
  plugins: [],
}