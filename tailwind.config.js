/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "pages/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      'logo': "url('src/icons/logo.svg')"
      
    },
    fontFamily: {
      inter : ['inter', 'cursive'],
      paytoneOne: ['Paytone One'],
    },
    backgroundImage:{
      'proyect1': "url('./assets/palacioColesterol.png')",
      'proyect2': "url('./assets/fruitDetector.png')",
      'proyect3': "url('./assets/calidad.png')",
      'proyect4': "url('./assets/secdep.png')",

    },
  },
  plugins: [],
}