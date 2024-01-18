/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
      width: {
        1280: '1280px',
        600: '600px',
        200: '200px',
        540: '540px',
      },
      height: {
        832: '832px',
        200: '200px',
        540: '540px',
        620: '620px',
      },
      margin: {
        340: '340px',
        940: '940px',
        710: '710px',
        90: '90px',
        200: '200px',
        122: '122px',
        540: '540px',
      },
    },
  },
  plugins: [],
}
