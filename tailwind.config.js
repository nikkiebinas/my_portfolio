/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "hsl(var(--color-black) / <alpha-value>)",
        white: "hsl(var(--color-white) / <alpha-value>)",
        maroon: "hsl(var(--color-maroon) / <alpha-value>)",
        lightMaroon: "hsl(var(--color-lightMaroon) / <alpha-value>)",
        lightBlack: "hsl(var(--color-lightBlack) / <alpha-value>)",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {},
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
