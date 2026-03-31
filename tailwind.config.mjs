const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0F4C81",
        brandBlueSoft: "#2F6DA5",
        brandGold: "#D4A63A",
        brandGoldSoft: "#E7C979",
        brandCream: "#FFFDF8",
        brandLightBlue: "#EAF4FF",
        brandDark: "#173552"
      },
      boxShadow: {
        card: "0 24px 56px rgba(15, 76, 129, 0.12)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        arabic: ["var(--font-arabic)"]
      }
    }
  },
  plugins: []
};

export default config;
