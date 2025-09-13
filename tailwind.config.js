/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#102a43",
          950: "#0a1c2a",
        },
        brand: {
          blue: "#124767",
          gold: "#C39A6A",
          "blue-light": "#1a5a7a",
          "blue-dark": "#0e3a52",
          "gold-light": "#d4b080",
          "gold-dark": "#a67c4a",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium:
          "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        large:
          "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
