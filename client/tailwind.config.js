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
      colors: {
        "accent": "#AABDED",      
        "neutral": "#f8dd99",     
        "base-100": "#ffffff",     
        "primary": "#B4B4B4",
        "secondary" : "#D9D9D9",
      },  
    },
  },

  plugins: [],
}

