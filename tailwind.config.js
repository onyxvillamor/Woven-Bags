/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'custom': {
          100: '#F4F4F8',
          200: '#C3B299',
          300: '#F4F2F3',
          400: '#272635',
          500: '#004643',
          600: '#005D59',
          700: '#3D3B53'      
          },
      },
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  plugins: [],
}

