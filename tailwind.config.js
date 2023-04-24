/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    screens: {
      onlyMobile: {max: '767px'},
      mobile: '425px',
      tablet: '768px',
      laptop: '1368px',
      desktop: '1920px',
    },
    fontFamily: {
      sans: ['Qanelas', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#3657CB',
        secondary: '#4F5B7C',
        appBg: '#1E2538',
        baseWhite: '#ffffff',
        baseBlack: '#000000',
        goodRating: '#4BCB36',
        averageRating: '#CB6C36',
        badRating: '#CB3F36',
      },
      padding: {
        mobile: '2rem',
        tablet: '3.5rem',
        laptop: '5rem',
        desktop: '15rem',
      },
      minHeight: {
        header: '65px',
        footer: '65px',
      },
    },
  },
  plugins: [],
};

