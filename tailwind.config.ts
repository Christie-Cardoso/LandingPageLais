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
        emerald: {
          50: "#ecfdf5",
          600: "#059669",
          900: "#064e3b",
        },
        stone: {
          50: "#fafaf9",
          800: "#292524",
          900: "#1c1917",
        },
      },
      fontFamily: {
        // No Next.js, usamos variáveis CSS para carregar as fontes sem layout shift
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
