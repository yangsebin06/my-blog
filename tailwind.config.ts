import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a',
        },
        surface: '#ffffff',
        'surface-dim': '#f8fafc',
        'on-surface': '#0f172a',
        'on-surface-variant': '#475569',
        outline: '#cbd5e1',
        'outline-variant': '#e2e8f0',
      },
      fontFamily: {
        "headline": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "mono": ["Fira Code", "monospace"]
      }
    },
  },
  plugins: [],
};
export default config;
