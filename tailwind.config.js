module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ['Barlow'],
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        accent: '#577789',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
