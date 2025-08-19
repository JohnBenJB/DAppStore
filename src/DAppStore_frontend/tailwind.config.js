/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'mini': '690px',
        'tablet': '960px',  // custom breakpoint
      },
    },
  },
  plugins: [],
}

