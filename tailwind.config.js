/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'night-sky': '#272B33',
        'mortar-grey': '#9E9E9E',
        'white-smoke': '#F5F5F5',
        'dark-elf': '#3C3E44',
        'washed-black': '#202329',
        'tangled-web': '#B2B2B2',
        'night-black': '#303136',
      },
    },
  },
  plugins: [],
};
