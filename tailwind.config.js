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
          hoverGray: '#F7F7F7',
          trendsColor: '#f7f9f9',
        },
        tweetFooter: {
          primary: {
            blue: 'rgb(29,155,240)',
            green: 'rgb(0,186,124)',
            red: 'rgb(249,24,128)',
          },
          secondary: {
            blue: 'rgba(29,155,240, 0.1)',
            green: 'rgba(0,186,124,0.1)',
            red: 'rgba(249,24,128,0.1)',
          },
        },
      },
    },
  },
  plugins: [],
};
