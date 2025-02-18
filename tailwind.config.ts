import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        adventPro: ["'Advent Pro'", "sans-serif"], 
      },
      colors: {
        primary: "#0361DE",
        secondary: "#FEE3CF",
      },
    },
  },


  plugins: [],
};

export default config;
