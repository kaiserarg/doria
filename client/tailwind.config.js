/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [{
          mytheme: {      
          "primary": "#8370FB",    
          "secondary": "#EFDFFC",    
          "accent": "#AABDED",      
          "neutral": "#f8dd99",     
          "base-100": "#ffffff",       
          "info": "#00000",     
          "success": "#00000",      
          "warning": "#00000",     
          "error": "#00000",
          },
        },
      ],
    },

  plugins: [require("daisyui")],
}

