/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: '600px',
      },
      colors: {
        periwinkle: '#e4d9ff',
        schemeRed: '#ff0035',
        schemeBlue: '#48acf0',
        schemeWhite: '#fafaff',
        schemeDark: '#30343f',
        schemeDarkBlue: '#004398',
      }
    },
  },
  plugins: [require('daisyui'), require('@shrutibalasa/tailwind-grid-auto-fit')],
  daisyui: {
    styled: false,
  }
}
