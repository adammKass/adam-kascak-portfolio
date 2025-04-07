/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PWhite: "rgba(var(--primary))",
        PBlack: "rgba(var(--secondary))",
        PGrey: "rgba(var(--primaryLight))",
        PGreyDark: "rgba(var(--primaryDark))",
      },
    },
    fontFamily: {
      montserrat: ['"Montserrat Alternates"', "sans-serif"],
    },
  },
  plugins: [],
};
