import { Container, Paper } from "@mui/material";
import * as React from "react";

import NavigationBar from "./NavigationBar";

export default function Layout(props) {
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

  return (
    <div>
      <NavigationBar />
      <Paper sx={bodyBackgroundPaperStyles}>
        <Container sx={containerStyles}>{props.children}</Container>
      </Paper>
    </div>
  );
}
