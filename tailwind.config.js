/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        'sm': '481px',
        // => @media (min-width: 481px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1025px',
        // => @media (min-width: 1025px) { ... }
  
        'xl': '1441px',
        // => @media (min-width: 1441px) { ... }
      }
    },
  },
  plugins: [],
}

