/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1a1a1a",
        "dark-card": "#252525",
        "dark-border": "#333333",
        accent: "#3b82f6",
        "accent-light": "#60a5fa",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "accent-glow": "0 0 20px rgba(255, 20, 147, 0.3)",
        "accent-glow-lg": "0 0 30px rgba(255, 20, 147, 0.4)",
      },
    },
  },
  plugins: [],
};
