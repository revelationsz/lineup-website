import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          purple: "#6B5BFF",
          green: "#3DFF8C",
        },
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
