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
    // theme for navigation bar mobile display
    tercera: {
      main: "#fff4fa", // mobile menu display background color
      light: "#482880", // mobile menu color
    },
  },
  typography: {
    h6: {
      fontFamily: ["Lobster Two"], // navigation bar title custom font family
    },
    h4: {
      fontFamily: ["Lobster Two"], // card header custom font family
    },
    fontFamily: ["Josefin Sans"], // global font family
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
    // theme for navigation bar mobile display
    tercera: {
      main: "#212121", // mobile menu display background color
      light: "rgba(255, 255, 255, 0.4)", // mobile menu color
    },
  },
  typography: {
    h6: {
      fontFamily: ["Lobster Two"], // navigation bar title custom font family
    },
    h4: {
      fontFamily: ["Lobster Two"], // card header custom font family
    },
    fontFamily: ["Josefin Sans"], // global font family
  },
});

export default theme;
//#330e62
