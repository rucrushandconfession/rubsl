import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./studio/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f766e",
          foreground: "#ffffff"
        },
        accent: {
          DEFAULT: "#f59e0b",
          foreground: "#111827"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -18px rgba(15, 23, 42, 0.35)"
      },
      borderRadius: {
        xl: "1rem"
      }
    }
  },
  plugins: []
};

export default config;
