/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      backgroundWhite: '#FAFAFA',
      componentBackground: '#FFFFFF',
      buttonColor: '#02274F',
      inputColor: '#F1F1F1',
      componentAccount: '#FDFDFD',
      backgroundAccount: '#F1F5F9',
      componentAccoutSpace: '#F4F4F4',
      errorColor: 'rgb(220 38 38)',
      black: '#343b48'
    },
    fontFamily: {
      'nunito': ['Nunito']
    },
  },
  plugins: [],
}