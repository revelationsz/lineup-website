import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--base)",      // Dark background
        fg: "var(--fg)",          // Light foreground text
        accent: {
          primary: "#ff2bd6",     // CTA & highlights
          secondary: "#19d4ff",   // Secondary accent / gradients
          muted: "#8a8a8f",       // Muted text / borders
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "sans-serif"],
        headline: ["var(--font-headline)", "'Space Grotesk'", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      spacing: {
        xxl: 'var(--space-xxl)',
        xl: 'var(--space-xl)',
        l: 'var(--space-l)',
        m: 'var(--space-m)',
        s: 'var(--space-s)',
      },
      fontSize: {
        h1: 'clamp(48px,6vw,88px)',
        h2: 'clamp(32px,4vw,56px)',
        h3: '24px',
        base: '18px',
        mono: '14px',
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
