import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#fafafa",
      main: "#ed4b82",
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
      main: "#fafafa",
    },
  },
  typography: {
    fontFamily: ["Josefin Sans"],
  },
});

export default theme;
