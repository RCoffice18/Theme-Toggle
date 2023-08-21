/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      poppinsBody: ["Poppins", "sans-serif"],
      sourceCodeStyle: ["Source Code Pro", "sans-serif"],
    },
    screens: {
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
    extend: {
      backgroundColor: {
        "main-dark-bg": "#000",
        "secondary-dark-bg": "#121212",
        "half-transparent": "rgba(40, 40, 40, 0.6)",
      },
      width: {
        400: "400px",
        500: "500px",
        600: "600px",
      },
    },
  },
  plugins: [],
}