/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        sans: ["system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "cursor-blink": "cursor-blink 1.1s steps(2, start) infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      keyframes: {
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-dot": {
          "0%, 100%": {
            opacity: "1",
            "box-shadow": "0 0 0 0 rgba(245,176,76,0.5)",
          },
          "50%": {
            opacity: "0.6",
            "box-shadow": "0 0 0 6px rgba(245,176,76,0)",
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate, daisyui],
  daisyui: {
    themes: [
      {
        reliability: {
          primary: "#F5B04C",
          "primary-content": "#1A1205",
          secondary: "#5BC3E0",
          "secondary-content": "#0A1A22",
          accent: "#F5B04C",
          "accent-content": "#1A1205",
          neutral: "#1A1F26",
          "neutral-content": "#E7E9EC",
          "base-100": "#0B0D10",
          "base-200": "#111418",
          "base-300": "#171C22",
          "base-content": "#E7E9EC",
          info: "#5BC3E0",
          "info-content": "#0A1A22",
          success: "#4CAF7D",
          "success-content": "#0A1710",
          warning: "#E6A23C",
          "warning-content": "#1A1205",
          error: "#E2554D",
          "error-content": "#1A0605",
          "--rounded-box": "0.75rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "9999px",
          "--border-btn": "1px",
        },
      },
    ],
    darkTheme: "reliability",
  },
};