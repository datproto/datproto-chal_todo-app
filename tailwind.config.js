/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'todo': {
          'lightMode': {
            'blue': {
              'lightest': 'hsl(0, 0%, 98%)',
              'lightest-gray': 'hsl(236, 33%, 92%)',
              'light-gray': 'hsl(233, 11%, 84%)',
              'dark-gray': 'hsl(236, 9%, 61%)',
              'darkest-gray': 'hsl(235, 19%, 35%)',
            }
          },
          'darkMode': {
            'blue': {
              'darkest': 'hsl(235, 21%, 11%)',
              'darkest-saturated': 'hsl(235, 24%, 19%)',
              'light-gray': 'hsl(234, 39%, 85%)',
              'light-gray-hover': 'hsl(236, 33%, 92%)',
              'dark-gray': 'hsl(234, 11%, 52%)',
              'darkest-gray': 'hsl(233, 14%, 35%)',
              'darkest-gray-hover': 'hsl(237, 14%, 26%)',
            },
          }
        }
      }
    },
  },
  plugins: [],
}
