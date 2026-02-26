import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#8B5CF6',
        'accent-hover': '#7C3AED',
        'bg-dark': '#0A0A0A',
        'bg-light': '#FFFFFF',
        'fg-on-dark': '#FFFFFF',
        'fg-on-light': '#0A0A0A',
        'muted': '#8A8A8F',
        'form-bg': '#E4E4E4',
        'form-input': '#000000',
        neon: {
          magenta: "#8B5CF6",
          cyan: "#8B5CF6",
          violet: "#8B5CF6",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "sans-serif"],
        headline: ["var(--font-headline)", "'Space Grotesk'", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        retro: ["var(--font-retro)", "'VT323'", "monospace"],
      },
      fontSize: {
        'display-hero': 'clamp(64px, 12vw, 160px)',
        'display-section': 'clamp(48px, 8vw, 100px)',
        'display-sub': 'clamp(32px, 5vw, 64px)',
        h1: 'clamp(48px, 6vw, 88px)',
        h2: 'clamp(32px, 4vw, 56px)',
        h3: '24px',
        base: '18px',
        mono: '14px',
      },
      borderRadius: {
        'pill': '9999px',
        'card': '16px',
        'input': '8px',
        'image': '20px',
      },
      maxWidth: {
        'content': '1280px',
        'form': '600px',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
