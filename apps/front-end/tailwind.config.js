const { createGlobPatternsForDependencies } = require("@nrwl/react/tailwind");
const { join } = require("path");
const defaultTheme = require("tailwindcss/defaultTheme");

const themeConstants = {
  paper: "#F9F9F9",
  primary: {
    main: "#fff",
    dark: "#e5e5e5"
  },
  secondary: {
    main: "#212121",
    dark: "#3A3A3A"
  },
  error: {
    main: "#b22222",
    dark: "#8b0000"
  },
  fg: { main: "#fff", dark: "rgba(55, 65, 81, 1)" },
  breakpoints: {
    xs: "0px",
    mb: "350px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px"
  }
};
module.exports = {
  content: [join(__dirname, "**/*!(*.stories|*.spec).{ts,tsx,html}"), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {
      colors: {
        paper: themeConstants.paper,
        primary: themeConstants.primary,
        secondary: themeConstants.secondary,
        error: themeConstants.error,
        fg: themeConstants.fg.main,
        "fg-dark": themeConstants.fg.dark
      }
    },

    // We over ride the whole screens with breakpoints for width. The 'ha' breakpoint will help us in blocking hover animations on devices not supporting hover.
    screens: {
      ...defaultTheme.screens,
      ...themeConstants.breakpoints,
      ha: { raw: "(hover: hover)" }
    }
  },
  plugins: []
};
