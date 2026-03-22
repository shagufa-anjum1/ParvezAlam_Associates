/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040c14",
          900: "#0a1520",
          800: "#0d1b2a",
          700: "#111d3c",
        },
        gold: {
          300: "#f5d98a",
          400: "#c9a84c",
          500: "#b8860b",
          600: "#9a6f00",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
