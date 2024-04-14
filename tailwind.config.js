/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      black: '#333333',
      white: '#FFFFFF',
      red: '#E60033',
      green: '#eeffee'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      backgroundImage: {
        top: "url('./src/assets/images/top-dummy1.jpg')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
