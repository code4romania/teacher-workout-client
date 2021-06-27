import { createMuiTheme } from "@material-ui/core";

export const make = () =>
  createMuiTheme({
    palette: {
      primary: {
        main: "#06B6D4",
        light: "#9cd8e2",
        dark: "#00515e",
      },
    },
  });
