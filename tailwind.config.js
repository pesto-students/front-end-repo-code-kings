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
        224: '224px',
        380: '380px',
        220: '220px',
        95: '95px',
      },
      height: {
        832: '832px',
        200: '200px',
        540: '540px',
        620: '620px',
        224: '224px',
        380: '380px',
        220: '220px',
        95: '95px',
      },
      margin: {
        340: '340px',
        940: '940px',
        710: '710px',
        90: '90px',
        200: '200px',
        122: '122px',
        540: '540px',
        224: '224px',
        380: '380px',
        58: '58px',
        220: '220px',
        95: '95px',
      },
    },
    screens: {
      sm: '600px',
      md: '768px',
      lg: '1200px',
    },
  },
  plugins: [],
}
