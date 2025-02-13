import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f9fa",
        foreground: "#ffffff",
        textPrimary: "#212529",
        textSecondary: "#6c757d",
        borderColor: "#dee2e6",
        accent: "#ffc107",
        danger: "#dc3545",
        darkBg: "#121212",
        darkText: "#e0e0e0",
        darkBorder: "#343a40",
      },
    },
  },
  safelist: [
    "bg-background", "bg-foreground", "text-textPrimary", "text-textSecondary",
    "border-borderColor", "text-accent", "text-danger", "bg-darkBg",
    "text-darkText", "border-darkBorder"
  ],
  plugins: [require("@tailwindcss/typography")],
};

export default config;
