/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Lora', 'serif'],
      script: ['WindSong', 'cursive'],
    },
    colors: {
      'blue': '#297C72',
      'white': '#FFF0F0',
      'black': '#000000',
    }
  },
  plugins: [],
}
