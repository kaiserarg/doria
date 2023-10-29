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
      spacing: {
        "CardWidth": "14.75rem",
        "CardLength": "26.8125rem",
        "NavWidth": "55.25rem",
        "NavLength": "14.0625rem",
        "NavShortWidth": "6.25rem",
        "NavMidWidth": "13.8125rem",
        "NavLongWidth": "19.0625rem",
        "NavShortHeight": "3rem",
        "NavMidHeight": "7.3125rem",
        "NavTallHeight": "11.5625rem",
      },
      borderRadius: {
        "Nav": "0.9375rem",
      },
    },
  },

  plugins: [],
}


