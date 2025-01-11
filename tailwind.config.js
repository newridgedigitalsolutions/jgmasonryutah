/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "425px" }, // Custom breakpoint for large phones
      }
    },
  },
  plugins: [],
}

