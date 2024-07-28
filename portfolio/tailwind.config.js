/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors:{
      'blue_bg' : '#1A2A41',
      ...colors

    },
    fontFamily:{
      odibee: ["Odibee Sans"],
      electrolize: ["Electrolize"],

    },
  },
  plugins: []
};