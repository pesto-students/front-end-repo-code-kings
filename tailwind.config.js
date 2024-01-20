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
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         balck: '#000',
//         'gray-500': '#434343',
//         'gray-600': '#262626',
//         white: '#fff',
//         'blue-500': '#3b82f6',
//       },
//       spacing: {},
//       fontFamily: {
//         roboto: 'Roboto',
//         pacifico: 'Pacifico',
//       },
//     },
//     fontSize: {
//       '5xl': '24px',
//       lgi: '19px',
//       '17xl': '36px',
//       '3xl': '22px',
//       '10xl': '29px',
//       inherit: 'inherit',
//     },
//     screens: {
//       mq1000: {
//         raw: 'screen and (max-width: 1000px)',
//       },
//       mq975: {
//         raw: 'screen and (max-width: 975px)',
//       },
//       mq725: {
//         raw: 'screen and (max-width: 725px)',
//       },
//       mq450: {
//         raw: 'screen and (max-width: 450px)',
//       },
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// }
