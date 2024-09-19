/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        cf1:['Righteous', 'sans-serif'],
        cf2:['Saira', 'sans-serif'],
        cf3I:['Inter','sans-serif'],
        cf4R:['Rowdies','sans-serif']
      },
      colors:{
        db1:['#0E38CD'],
        tclr:['#0094E7'],
        tclr1:['#0E38CD'],
        tclr2:['#4E596B'],
        bgclr1:['#4F18CA'],
        bgclr2:['#739FE8'],
        bgclr3:['#E441FF'],
        bgclr4:['#1901F8'],
        bgclr5:['#00B3FF'],
        bgclr6:['#DBEDFF'],
        bgclr7:['#477AE3'],
        bgclr8:['#931BBD'],
      }
    },
  },
  plugins: [],
}

