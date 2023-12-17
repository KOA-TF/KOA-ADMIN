/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#E9F0FF",
          200: "#BCD2FE",
          300: "#6E9DFD",
          400: "#518AFD",
          500: "#226DFC",
          600: "#2363E5",
          700: "#1B3DB3",
          800: "#153C8B",
          900: "#102E6A",
        },
        grey: {
          100: "#F4F6F8",
          200: "#E8EBEF",
          300: "#D9DCE1",
          400: "#A3A3A3",
          500: "#363C48",
          600: "#20232D",
          700: "#171A21",
          800: "#15171E",
          900: "#0F1011",
        },
        gray: {
          100: "#F4F6F8",
          200: "#E8EBEF",
          300: "#D9DCE1",
          400: "#A3A3A3",
          500: "#363C48",
          600: "#20232D",
          700: "#171A21",
          800: "#15171E",
          900: "#0F1011",
        },
        white: "#FFFFFF",
        black: "#0A0A0A",
      },
    },
  },
};
