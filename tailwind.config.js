/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#070a0d",
        secondary: "#cc0000",
        accent: "#fe0000",
      },
    },
  },
  plugins: [],
};
