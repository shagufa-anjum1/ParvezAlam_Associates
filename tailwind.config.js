/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#f0d080',
          400: '#e8c060',
          500: '#c9a84c',
          600: '#b8962e',
        },
        navy: {
          800: '#0d1b2a',
          900: '#081420',
          950: '#040c14',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
