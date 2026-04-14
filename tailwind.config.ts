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
          bg: '#000000',         // Pitch Black
          card: '#161618',       // Slightly lighter black for cards
          cardHover: '#1c1c1e',  // Hover state
          blue: '#2997ff',       // Apple Blue for Dark Mode
          blueHover: '#3b9eff',
          border: '#333336',     // Subtle border
          text: '#f5f5f7',       // Pure white-ish text
          textMute: '#86868b'    // Gray muted text
        }
      },
      fontFamily: {
        "sans": ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        "mono": ["Fira Code", "monospace"]
      },
      boxShadow: {
        'apple': '0 0px 20px rgba(0,0,0,0.4)',
        'apple-hover': '0 0px 40px rgba(41,151,255,0.1)'
      }
    },
  },
  plugins: [],
};
export default config;
