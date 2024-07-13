/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        Poppins: ["Poppins"],
        PlaywriteCu: ["Playwrite CU", "cursive"]
      }
    },
  },
  plugins: [],
}

