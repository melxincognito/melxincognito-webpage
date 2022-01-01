import { Container } from "@mui/material";
import React from "react";
import BottomNavigationLabel from "./BottomNavigation";

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
          marginTop: "9rem",
          marginBottom: "5rem",
        }}
      >
        {props.children}
      </Container>
      <BottomNavigationLabel />
    </div>
  );
}
