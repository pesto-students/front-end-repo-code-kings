/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
      width: {
        1280: '1280px',
        600: '600px',
      },
      height: {
        832: '832px',
      },
      margin: {
        340: '340px',
        940: '940px',
        710: '710px',
        90: '90px',
        122: '122px',
      },
    },
  },
  plugins: [],
}
