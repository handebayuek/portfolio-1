import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
  safelist: [
    "bg-primary",
    "text-primary",
    "text-secondary",
    "font-adventPro"
  ],
  plugins: [],
};

export default config;
