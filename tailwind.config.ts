import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0F2D52",
          "blue-soft": "#1C4F86",
          gold: "#C8A34F",
          "gold-soft": "#E9D4A1",
          cream: "#F8F6F0",
          ink: "#1B2430"
        }
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        card: "0 18px 45px rgba(15, 45, 82, 0.08)",
        glow: "0 10px 30px rgba(200, 163, 79, 0.18)"
      },
      backgroundImage: {
        "hero-rings":
          "radial-gradient(circle at 20% 20%, rgba(200, 163, 79, 0.14), transparent 28%), radial-gradient(circle at 80% 0%, rgba(28, 79, 134, 0.18), transparent 24%), linear-gradient(135deg, rgba(15, 45, 82, 0.98), rgba(28, 79, 134, 0.92))"
      }
    }
  },
  plugins: []
};

export default config;
