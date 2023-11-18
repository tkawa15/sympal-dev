/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    colors: {
      'black': '#333333',
      'white': '#FFFFFF',
      'red': '#E60033',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
