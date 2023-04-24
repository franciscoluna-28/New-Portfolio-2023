/* eslint-disable no-undef */
// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#0B0C10',
      },
      colors: {
        mainExtraDarkBlue: '#0B0C10',
        mainDarkBlue: '#1F2833',
        mainSilver: '#C5C6C7',
        mainCyan: '#66FCF1',
        mainDarkCyan: '#45A293',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  variants: {
    extend: {
      backgroundColor: ['dark'],
    },
  },
};
