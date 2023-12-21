/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tafe-grey-700': '#373737',
        'tafe-grey-600': '#4D4D4D',
        'tafe-grey-500': '#676769',
        'tafe-blue-300': '#3B80D0',
        'tafe-blue-500': '#165FB4',
        'tafe-white': '#FFFFFF',
        'tafe-pink-300': '#D96CA8',
        'tafe-status-red': '#B11030',
        'tafe-aqua-300': '#26AFAF',
        'tafe-controls-green': '#12924D',
        'tafe-controls-red': '#E5143C',
      },
      backgroundImage: {
        'DCE-Showcase-Facilities':
          "url('./stories/assets/DCE-Showcase-Facilities.jpeg')",
      },
    },
  },
  plugins: [],
};
