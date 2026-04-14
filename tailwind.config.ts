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
        apple: {
          light: '#fbfbfd',
          gray: '#f5f5f7',
          dark: '#1d1d1f',
          blue: '#0066cc',
          blueHover: '#0077ed',
          border: '#d2d2d7',
          text: '#1d1d1f',
          textMute: '#86868b'
        }
      },
      fontFamily: {
        "sans": ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        "mono": ["Fira Code", "monospace"]
      },
      boxShadow: {
        'apple': '0 4px 24px rgba(0,0,0,0.06)',
        'apple-hover': '0 8px 32px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
};
export default config;
