/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      black: {
        DEFAULT: '#333333',
        5: 'rgba(51, 51, 51, 0.5)',
      },
      white: '#FFFFFF',
      red: '#E60033',
      green: '#eeffee',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      zIndex: {
        background: '-1',
        header: '100',
        portal: '9999',
      },
      width: {
        dvw: '100dvw',
      },
      height: {
        dvh: '100dvh',
      },
      transitionProperty: {
        header: 'width, padding',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
