/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
          'montserrat': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 0 0 20px rgba(20, 5, 5, 0.3)',
      },
      backgroundImage: {
        'hero': "url('./src/assets/background.png')",
      },
    },
  },
  plugins: [],
}
