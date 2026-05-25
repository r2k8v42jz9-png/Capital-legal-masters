import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#070A0F",
          secondary: "#0D1117",
          elevated: "#111827",
          card: "#0F1520",
        },
        accent: {
          red: "#C41E3A",
          "red-light": "#E8334A",
          "red-dark": "#9B1528",
          gold: "#A8906A",
          "gold-light": "#C4AC82",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          subtle: "rgba(255,255,255,0.04)",
          accent: "rgba(196,30,58,0.35)",
        },
        text: {
          primary: "#E8ECF0",
          secondary: "#8B96A7",
          muted: "#505A68",
          inverse: "#070A0F",
        },
      },
      spacing: {
        "section": "120px",
        "section-sm": "80px",
      },
      letterSpacing: {
        "ultra": "0.25em",
        "wide-xl": "0.15em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "glow-red": "0 0 30px rgba(196,30,58,0.25), 0 0 60px rgba(196,30,58,0.1)",
        "glow-red-sm": "0 0 15px rgba(196,30,58,0.2)",
        "card": "0 4px 40px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset",
        "card-hover": "0 8px 60px rgba(0,0,0,0.5), 0 0 30px rgba(196,30,58,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
