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
  },
  plugins: [],
}