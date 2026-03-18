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
        primary: { 50: "#EFF6FF", 100: "#DBEAFE", 200: "#BFDBFE", 300: "#93C5FD", 400: "#60A5FA", 500: "#3B82F6", 600: "#2563EB", 700: "#1D4ED8", 800: "#1E40AF", 900: "#1E3A8A" },
        surface: "#FFFFFF",
        page: "#F8FAFC",
        "card-bg": "#FFFFFF",
        "card-hover": "#F1F5F9",
        sidebar: "#0F172A",
        "sidebar-hover": "#1E293B",
        "text-heading": "#0F172A",
        "text-body": "#334155",
        "text-muted": "#94A3B8",
        "border-default": "#E2E8F0",
        "border-strong": "#CBD5E1",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)",
        glow: "0 0 20px rgba(37,99,235,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
