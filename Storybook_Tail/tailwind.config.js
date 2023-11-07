/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tafe-grey-700': '#373737',
        'tafe-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
