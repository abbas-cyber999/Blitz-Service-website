import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0f2d52",
        brandBlueSoft: "#1c4f86",
        brandGold: "#c8a34f",
        brandGoldSoft: "#e9d4a1",
        brandCream: "#f8f6f0",
        brandDark: "#1b2430",
        brand: {
          blue: "#0f2d52",
          "blue-soft": "#1c4f86",
          gold: "#c8a34f",
          "gold-soft": "#e9d4a1",
          cream: "#f8f6f0",
          dark: "#1b2430"
        }
      },
      fontFamily: {
        display: ["var(--font-display-family)"],
        sans: ["var(--font-sans-family)"]
      },
      boxShadow: {
        card: "0 18px 45px rgba(15, 45, 82, 0.08)",
        glow: "0 10px 30px rgba(200, 163, 79, 0.18)"
      },
      backgroundImage: {
        heroPremium:
          "linear-gradient(135deg, rgba(15, 45, 82, 0.98) 0%, rgba(19, 57, 102, 0.96) 48%, rgba(28, 79, 134, 0.92) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
