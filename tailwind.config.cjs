const defaultTheme = require("tailwindcss/defaultTheme");

/** @satisfies {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "background": "#232946", // just dark
        "on-background": "#fffffe",
        // "background": "#b8c1ec", // blueish
        // "on-background": "#232946",
        // "primary": "#8EC1D6", // blue-ish
        "primary": "#FDBA74", // yellow-ish
        // "primary": "#eebbc3", // pink-ish
        "on-primary": "#232946",
        "stroke": "#010101",
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
