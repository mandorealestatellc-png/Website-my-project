import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        obsidian: "#0a0a0a",
        charcoal: "#1a1a1a",
        "charcoal-light": "#2a2a2a",
        sand: "#c8b89a",
        "sand-light": "#e8ddd0",
        "sand-muted": "#f5f0ea",
        bone: "#faf8f5",
        cream: "#f2ede6",
        "warm-white": "#fffcf8",
        gold: "#b8965a",
        "gold-light": "#d4b07a",
        muted: "#6b6b6b",
        "muted-light": "#9a9a9a",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,7vw,7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem,5vw,5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem,4vw,3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-xl": ["clamp(1.75rem,3vw,2.75rem)", { lineHeight: "1.2" }],
        "heading-lg": ["clamp(1.5rem,2.5vw,2.25rem)", { lineHeight: "1.25" }],
        "heading-md": ["clamp(1.25rem,2vw,1.75rem)", { lineHeight: "1.3" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        "site": "1440px",
        "content": "1200px",
        "narrow": "800px",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.7) 100%)",
        "card-gradient": "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)",
        "section-gradient": "linear-gradient(to bottom, #faf8f5, #f2ede6)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
