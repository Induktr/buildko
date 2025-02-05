/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        construction: {
          primary: '#B45309', // amber-700
          secondary: '#78350F', // amber-900
          accent: '#D97706', // amber-600
        },
      },
    },
  },
  plugins: [],
}
