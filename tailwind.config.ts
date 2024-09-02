import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "0px",
      xs: "320px",
      md: "640px",
      lg: "700px",
      xl: "1024px",
      xlg: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      light: {
        100: "#f8f8f8",
        200: "#e9e9e9",
        300: "#fff",
        400: "#f9f9f9",
        500: "#ebebeb",
      },
      slate: {
        900: "#262626",
        800: "#333",
        750: "#a2a1a833",
        775: "#cacaca26",
      },
      stone: {
        50: "#1212121a",
        100: "#242223",
        200: "#16151C",
      },
      gray: {
        300: "#7b7b7b",
        400: "#808080",
        500: "#a2a1a8",
      },
      neutral: {
        100: "#cdcdcd",
      },
      orange: {
        400: "#ec232b",
        500: "#ee232f",
      },
      red: {
        600: "#dc2626",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "0.6": "0.6px",
    },
    borderRadius: {
      DEFAULT: "0.25rem",
      xl: "0.625rem",
      "2xl": "1rem",
      "5xl": "3.125rem",
    },
    boxShadow: {
      sideBar: "1px 1px 3px 0px",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
