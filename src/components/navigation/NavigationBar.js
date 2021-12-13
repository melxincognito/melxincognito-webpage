import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "pink" }}>
      <Toolbar>
        <Typography variant="h5">Nav Bar</Typography>
        <Container>
          <Tabs>
            <Tab label="Home" component={Link} to="/" />
            <Tab label="About Me" component={Link} to="/about" />
            <Tab label="My Projects" component={Link} to="/projects" />
          </Tabs>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
