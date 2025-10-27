/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        blueDark: {
          "primary": "#3B82F6",
          "primary-focus": "#2563EB",
          "primary-content": "#ffffff",
          "secondary": "#60A5FA",
          "secondary-focus": "#1E40AF",
          "secondary-content": "#ffffff",
          "accent": "#93C5FD",
          "accent-focus": "#1D4ED8",
          "accent-content": "#ffffff",
          "neutral": "#1E293B",
          "neutral-focus": "#0F172A",
          "neutral-content": "#E2E8F0",
          "base-100": "#0F172A",
          "base-200": "#1E3A8A",
          "base-300": "#1E40AF",
          "base-content": "#E0F2FE",
        },
      },
      "light", // add the light theme for toggling
    ],
  },
};
