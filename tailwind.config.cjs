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
    },
    backgroundImage: {
      'slideshow01': "url('/images/slideshow/01.jpg')",
      'slideshow02': "url('/images/slideshow/02.jpg')",
      'slideshow03': "url('/images/slideshow/03.jpg')",
      'slideshow04': "url('/images/slideshow/04.jpg')",
      'slideshow05': "url('/images/slideshow/05.jpg')",
      'slideshow06': "url('/images/slideshow/06.jpg')",
      'slideshow07': "url('/images/slideshow/07.jpg')",
      'slideshow08': "url('/images/slideshow/08.jpg')",
      'slideshow09': "url('/images/slideshow/09.jpg')",
      'slideshow10': "url('/images/slideshow/10.jpg')",
      'slideshow11': "url('/images/slideshow/11.jpg')",
      'slideshow12': "url('/images/slideshow/12.jpg')",
      'benny': "url('/images/benny.jpg')",
      'tony': "url('/images/tony.jpg')"
    },
  },
  plugins: [],
}
