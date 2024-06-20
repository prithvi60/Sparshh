const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|chip|divider|image|link|modal|navbar|progress|select|skeleton|spinner|tabs|ripple|listbox|popover|scroll-shadow).js"
  ],
  theme: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      lato: ["var(--font-lato)"],
      protest: ["var(--font-protest)"],
    },
    screens: {
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1441px",
      "2xl": "1921px",
    },
    extend: {
      aspectRatio: {
        clip: "9/16",
      },
      keyframes: {
        move: {
          // "100%": {
          //   backgroundPosition: "40px 0px",
          // },
          from: {
            backgroundPositionX: 0,
          },
          to: {
            backgroundPositionX: "113px",
          },
        },
      },
      animation: {
        movement: "move 5s linear infinite",
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
            // default: "#FDFCD4",
            default: "#CCBA78",
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
