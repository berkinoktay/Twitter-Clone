module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          base: 'hsl(203, 89%, 53%)',
          darken: 'hsl(203, 89%, 40%)',
          lighten: 'hsl(203, 89%, 90%)',
        },
        secondary: {
          black: '#14171A',
          darkGray: '#657786',
          lightGray: '#AAB8C2',
          extraLightGray: '#E1E8ED',
          lightestGray: '#eff3f4',
        },
      },
    },
  },
  plugins: [],
};
