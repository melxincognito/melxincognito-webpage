import React, { useState } from "react";
import { Container, Paper } from "@mui/material";

import NavigationBar from "./NavigationBar";
import { ThemeProvider } from "@mui/material";
import { Switch } from "@mui/material";
import theme from "../../assets/theme";
import { darkTheme } from "../../assets/theme";

export default function Layout(props) {
  // dark/light mode state and toggle function
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // styles variables
  const bodyBackgroundPaperStyles = {
    bgcolor: "primary.light",
    position: "fixed",
    height: "100%",
    overflow: "scroll",
    width: "100%",
    marginTop: 0.1,
  };

  const containerStyles = {
    alignContent: "center",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "15rem",
  };

  const toggleThemeContainerStyles = {
    display: "flex",
    justifyContent: "flex-end",
  };

  return (
    <div>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <NavigationBar />
        <Paper sx={bodyBackgroundPaperStyles}>
          <Container sx={containerStyles}>
            <div style={toggleThemeContainerStyles}>
              <Switch
                color="success"
                checked={darkMode}
                onChange={toggleTheme}
              />
            </div>
            {props.children}
          </Container>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
