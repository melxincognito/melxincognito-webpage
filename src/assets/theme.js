import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#fafafa",
      main: "#FF7BA9",
      light: "#fff4fa",
    },
    secondary: {
      main: "#482880",
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
      dark: "440A67",
      main: "#fafafa",
    },
  },
  typography: {
    fontFamily: ["Josefin Sans"],
  },
});

export default theme;
