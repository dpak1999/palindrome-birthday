/** @format */

const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/*.{js,jsx,ts,tsx}',
    './src/components/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
