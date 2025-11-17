import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "df-bg": "#020617",
        "df-surface": "#020617",
        "df-card": "#020617",
        "df-primary": "#06b6d4",
        "df-primary-soft": "#0ea5e9",
        "df-accent": "#22d3ee",
        "df-muted": "#64748b"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.4)"
      }
    }
  },
  plugins: []
};

export default config;
