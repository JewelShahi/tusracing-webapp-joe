/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      // Calm and Refreshing Light Theme
      {
        lightTheme: {
          primary: "#3B82F6",           // A professional and approachable blue
          "primary-focus": "#2563EB",
          "primary-content": "#ffffff",

          secondary: "#93C5FD",         // A softer, lighter blue for accents
          "secondary-focus": "#60A5FA",
          "secondary-content": "#1E293B",

          accent: "#10B981",            // A gentle, complementary teal for highlights
          "accent-focus": "#059669",
          "accent-content": "#ffffff",

          neutral: "#F1F5F9",           // A soft, slightly blue-tinted gray for backgrounds
          "neutral-focus": "#E2E8F0",
          "neutral-content": "#1E293B",

          "base-100": "#FFFFFF",        // Clean white for the main background
          "base-200": "#F8FAFC",        // Slightly off-white for cards and sections
          "base-300": "#F1F5F9",
          "base-content": "#1F2937",    // A dark slate for excellent readability

          info: "#0EA5E9",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },

      // Calm and Professional Dark Theme
      {
        darkTheme: {
          primary: "#60A5FA",           // A brighter blue to stand out on a dark background
          "primary-focus": "#3B82F6",
          "primary-content": "#0F172A",

          secondary: "#3B82F6",         // A slightly deeper blue for secondary elements
          "secondary-focus": "#2563EB",
          "secondary-content": "#ffffff",

          accent: "#14B8A6",            // A muted, elegant teal for accents
          "accent-focus": "#0D9488",
          "accent-content": "#ffffff",

          neutral: "#1E293B",           // A deep, cool-toned slate for backgrounds
          "neutral-focus": "#334155",
          "neutral-content": "#E2E8F0",

          "base-100": "#0F172A",        // The primary dark background color
          "base-200": "#1E293B",        // For cards and layered sections
          "base-300": "#334155",
          "base-content": "#E2E8F0",    // A light gray for comfortable reading

          info: "#0EA5E9",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#F43F5E",
        },
      },
    ],
  },
};