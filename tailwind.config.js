module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#1C9BEF',
          darken: '#188CD8',
          lighten: 'hsl(203, 89%, 96%)',
        },
        secondary: {
          black: '#14171A',
          darkGray: '#657786',
          lightGray: '#AAB8C2',
          extraLightGray: '#E7E7E8',
          lightestGray: '#eff3f4',
        },
      },
    },
  },
  plugins: [],
};
