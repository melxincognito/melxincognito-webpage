import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#fafafa", // white
      main: "#FF7BA9", // dark pink
      light: "#fff4fa", // light pink
    },
    secondary: {
      // theme for background of cards
      dark: "rgba(255, 255, 255, 0.4)", // white low opacity
      main: "#482880", // purple
      light: "#fafafa", // white
    },
    // theme for navigation bar mobile display
    tercera: {
      main: "#fff4fa", // white, mobile menu display background color
      light: "#482880", // purple, mobile menu color
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
      dark: "#212121", // matte black
      main: "#23143e", // dark purple
      light: "#212121", // matte black
    },
    secondary: {
      // theme for background of cards
      dark: "rgba(255, 255, 255, 0.4)", // white with low opacity
      main: "#440A67", // purple
      light: "#fafafa", // white
    },
    // theme for navigation bar mobile display
    tercera: {
      main: "#212121", // black, mobile menu display background color
      light: "rgba(255, 255, 255, 0.4)", // white low opacity, mobile menu color
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
