const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|chip|divider|image|link|navbar|tabs|ripple|spinner).js"
  ],
  theme: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      lato: ["var(--font-lato)"],
      protest: ["var(--font-protest)"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      aspectRatio: {
        clip: "9/16",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#572D0C",
            secondary: "#C78E3A",
            default: "#FDFCD4",
            success: "#E3B76A",
            info: "#281E18",
          },
        },
        // dark: {
        //   colors: {},
        // },
      },
    }),
  ],
};
