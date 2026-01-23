/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./subpages/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // if using pages folder
    "./index.html",
  ],
  theme: {
    extend: {
      cursor: {
        auto: "url('/cursors/cursor-auto.svg') 0 0, auto",
        pointer: "url('/cursors/cursor-pointer.svg') 0 0, pointer",
        text: "url('/cursors/cursor-text.svg') 0 0, text",
        default: "url('/cursors/cursor-auto.svg') 0 0, default",
      },
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
  variants: {
    extend: {
      outline: ["focus-visible"],
    },
  },
  plugins: [],
};
