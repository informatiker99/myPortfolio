/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        normalText: "#C7C7C7",
        normalTextHover: "#DBDBDB",
        generalBg: "#0A0A0A",
        articleBG:'#1A1A1A',
        phosphorusGreen: '#D3E97A',
        lightDark: '#222222',
      }
    },
    fontFamily: {
      bebasBold: ["BebasNeueProBold", "sans-serif"],
      bebasRegular: ["BebasNeueProBold", "sans-serif"],
      Manrope: ["Manrope", "sans-serif"],

    },

  },
  plugins: [],
}