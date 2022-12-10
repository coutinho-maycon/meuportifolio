/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./src/assets/desafioDois/wallpaper.jpeg')",
        
      },
      colors: {
        'cork': {          
          '900': '#43291f',        
        },
        'sidecar': {          
          '100': '#f4f0bb',          
        },
        'de-york': {          
          '300': '#87c38f',          
        },
        'green-pea': {          
          '600': '#226f54',          
        },
        'punch': {          
          '600': '#da2c38',          
      },
      
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      
      },
    },
  },
  plugins: [],
}
