/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "200px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    fontFamily: {
      montserat: ["Montserrat", "sans-serif"],
      robot: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
