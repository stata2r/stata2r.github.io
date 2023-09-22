const starlightPlugin = require("@astrojs/starlight-tailwind")

// Generated color palettes
const accent = { 200: "#b5c6ff", 600: "#4048ff", 900: "#1d2575", 950: "#151e4f" }
const gray = { 100: "#f6f6f6", 200: "#eeeeee", 300: "#c2c2c2", 400: "#8b8b8b", 500: "#585858", 700: "#383838", 800: "#272727", 900: "#181818" }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
}
