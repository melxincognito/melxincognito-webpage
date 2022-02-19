import { Container, Paper } from "@mui/material";
import React from "react";

import NavigationBar from "./NavigationBar";

export default function Layout(props) {
  return (
    <div>
      <NavigationBar />
      <Paper
        sx={{
          bgcolor: "primary.light",
          position: "fixed",
          height: "100%",
          overflow: "scroll",
          width: "100%",
        }}
      >
        <Container
          sx={{
            alignContent: "center",
            justifyContent: "center",
            marginTop: "1rem",
            marginBottom: "15rem",
          }}
        >
          {props.children}
        </Container>
      </Paper>
    </div>
  );
}
