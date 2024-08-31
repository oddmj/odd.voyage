import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["MaruBuri", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        paper: "rgb(240, 238, 229)",
      },
    },
  },
  plugins: [],
};
