/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#3A4256',
        'blue': '#0FCFEC',
        'green': '#19D3AE'
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
  },
  plugins: [require("daisyui")],
}