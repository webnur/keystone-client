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
        background: "#fff", 
        foreground: "#424242", 
        primary: "#d32f2f", 
        secondary: "#f68381", 
        tertiary: "#ffebee", 
        text: "#424242", 
        hover: "#d32f2f", 
        border: "#d32f2f", 
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px (default)
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "2rem", // 32px
        "4xl": "3rem", // 48px
        "5xl": "4rem", // 64px
      },
    },
  },
  plugins: [],
};

export default config;
