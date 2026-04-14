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
        "primary-container": "#3e6dee",
        "inverse-primary": "#1b53d5",
        "secondary-fixed-dim": "#00e475",
        "error": "#ffb4ab",
        "surface-dim": "#131313",
        "outline": "#8d90a0",
        "tertiary": "#4cd6ff",
        "on-surface": "#e5e2e1",
        "outline-variant": "#434654",
        "on-tertiary-container": "#ffffff",
        "tertiary-container": "#00819e",
        "on-tertiary-fixed": "#001f28",
        "inverse-on-surface": "#313030",
        "on-background": "#e5e2e1",
        "on-error-container": "#ffdad6",
        "on-surface-variant": "#c3c5d7",
        "primary-fixed-dim": "#b5c4ff",
        "on-secondary": "#003918",
        "primary-fixed": "#dbe1ff",
        "surface-container-highest": "#353534",
        "error-container": "#93000a",
        "surface": "#131313",
        "secondary-fixed": "#62ff96",
        "on-tertiary": "#003543",
        "background": "#131313",
        "on-primary-container": "#ffffff",
        "tertiary-fixed": "#b7eaff",
        "on-tertiary-fixed-variant": "#004e60",
        "surface-tint": "#b5c4ff",
        "on-primary-fixed-variant": "#003cac",
        "surface-container-lowest": "#0e0e0e",
        "surface-variant": "#353534",
        "tertiary-fixed-dim": "#4cd6ff",
        "on-secondary-fixed": "#00210b",
        "on-primary-fixed": "#00164d",
        "surface-container-high": "#2a2a2a",
        "inverse-surface": "#e5e2e1",
        "surface-container": "#201f1f",
        "primary": "#b5c4ff",
        "on-secondary-container": "#00622e",
        "on-secondary-fixed-variant": "#005226",
        "on-primary": "#00297b",
        "on-error": "#690005",
        "secondary-container": "#05e777",
        "surface-bright": "#393939",
        "secondary": "#7dffa2",
        "surface-container-low": "#1c1b1b"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
