import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#fafafa",
      main: "#FF7BA9",
      light: "#fff4fa",
    },
    secondary: {
      // theme for background of cards
      dark: "rgba(255, 255, 255, 0.4)",
      main: "#482880",
      light: "#fafafa",
    },
  },
  typography: {
    fontFamily: ["Josefin Sans"],
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      dark: "#212121",
      main: "#23143e",
      light: "#212121",
    },
    secondary: {
      // theme for background of cards
      dark: "rgba(255, 255, 255, 0.4)",
      main: "#440A67",
      light: "#fafafa",
    },
  },
  typography: {
    fontFamily: ["Josefin Sans"],
  },
});

export default theme;
//#330e62
