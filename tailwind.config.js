/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#32318E",
        "primary-dark": "#27266F",
        "primary-light": "#EEEEFA",

        "muted-gold": "#D9B84C",

        text: "#17172A",
        surface: "#FFFFFF",
        "text-secondary": "#53535c",

        forest: "#446552",
        river: "#448CB2",
        ink: "#434745",
        brick: "#E76639",
        leaf: "#62AF7B",
        gold: "#EABB06",

        // primary: "#32318E",
        // "primary-dark": "#27266F",
        // "primary-light": "#EEEEFA",
        // support: "#D9A441",
        // background: "#FAFAF7",
        // surface: "#FFFFFF",
        // text: "#17172A",
        // "text-secondary": "#5F6072",
        // border: "#E3E3EA",
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
