/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101311",
        cream: "#F5EFE2",
        paper: "#FFFDF7",
        forest: "#123C30",
        leaf: "#2F8064",
        gold: "#F4C542",
        brick: "#D95F45",
        river: "#2B638A",
      },

      fontFamily: {
        display: ['"Bodoni Moda"', "Georgia", "serif"],
        body: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      boxShadow: {
        soft: "0 24px 80px rgba(16, 19, 17, 0.18)",
      },
    },
  },

  plugins: [],
};
