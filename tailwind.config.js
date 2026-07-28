/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,json}'],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#3730a3'
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    }
  },
  plugins: []
}