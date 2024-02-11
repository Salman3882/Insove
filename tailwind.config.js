/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container : {
      paddding:{
        DEFAULT: '15px',
      }
,
screens: {
  sm: '648px',
  md: '768px',
  lg: '960px',
  xl: '1338px',
}    
},
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT:'#1cbccf',
          secondary:'#18abbc',
          teritary:'#90c6cc'
        },
        grey: '#c8f0f1'
      ,
    },
    fontFamily: {
      primary: 'poppins',

    },
    boxShadow:{
      custom1: '8px 2px 40px 0px rgba(8,70,0.68)',
      custom2: '0px 0px 30px 0px rgba(8,73,81,0.86)'
    },
    backgroundImage: {
      services: 'url(../../assets/img/services/bg.svg)',
      testimonials: 'url(../../assets/img/testimonials/bg.svg)',
      departments: 'url(../../assets/img/departments/bg.svg)',
      quoteLeft : 'url(../../assets/icons/testimonials/quote-left.svg)',
      quoteRight : 'url(../../assets/icons/testimonials/quote-right.svg)',
    },

    },
  },
  plugins: [],
}