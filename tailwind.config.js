/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#05070a",
          900: "#0a0e14",
          800: "#10151d",
          700: "#161c26",
        },
        signal: {
          cyan: "#22d3ee",
          green: "#34d399",
          amber: "#fbbf24",
          red: "#f87171",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "scan-line": "scan-line 8s linear infinite",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(52, 211, 153, 0.5)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 0 6px rgba(52, 211, 153, 0)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
