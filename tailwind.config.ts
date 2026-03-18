import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#07080C",
        deep: "#0B0D14",
        surface: "#10131C",
        card: "#151925",
        "card-hover": "#1A1F30",
        gold: {
          50: "#FFF8E1",
          100: "#F5E6A3",
          200: "#E8C547",
          300: "#D4AF37",
          400: "#B8941E",
          500: "#8B6914",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
