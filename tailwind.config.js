/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#1A1A1A',
          light: '#E8E8E8',
          dark: '#101010',
        },
      },
    },
  },
  plugins: [],
}
