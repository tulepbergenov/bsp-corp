import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./_src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "20px",
    },
  },
  plugins: [require("tailwindcss-text-rendering")],
};

export default config;
