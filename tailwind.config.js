/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#222831", // A very dark gray, close to black
        mediumGray: "#393E46", // A medium gray shade
        teal: "#00ADB5", // A bright teal color
        lightGray: "#EEEEEE", // A very light gray, almost white
      },
    },
  },
  plugins: [],
};
