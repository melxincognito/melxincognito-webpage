import { Container } from "@mui/material";
import React from "react";

import NavigationBar from "./NavigationBar";

export default function Layout(props) {
  return (
    <div>
      <NavigationBar />
      <Container
        sx={{
          alignContent: "center",
          justifyContent: "center",
          padding: 3,
          marginTop: "7rem",
        }}
      >
        {props.children}
      </Container>
    </div>
  );
}
