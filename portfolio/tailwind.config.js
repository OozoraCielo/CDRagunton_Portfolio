import { scale } from 'svelte/transition';

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        bigger: {
            '0%, 100%': { scale: 1.25 },
        },
    },
    animation: {
      bigger: 'bigger 2s ease-in-out infinite',
    },
    },
    colors:{
      'blue_bg' : '#243a54',
      'light_blue_area' : '#74a1b3',
      ...colors

    },
    
    fontFamily:{
      odibee: ["Odibee Sans"],
      electrolize: ["Electrolize"],

    },
  },
  plugins: []
};