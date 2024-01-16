/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1327px"
      },
      
      fontFamily: {
        robo: ['Roboto', 'sans-serif'],
       rem: [ 'REM', 'sans-serif'],
       abz: [ 'ABeeZee', 'sans-serif'],
      },

    },
  },
  plugins: [],
}