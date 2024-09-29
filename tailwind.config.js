/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: ["Rancho", "cursive"],
      },
      colors: {
        primary: "#343131",
        secondary: "#A04747",
        accent: "#D8A25E",
        lightAccent: "#EEDF7A",
      },
    },
  },
  plugins: [require("daisyui")],
};
