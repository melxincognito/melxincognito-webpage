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
    <AppBar position="static" sx={{ bgcolor: "pink", padding: 2 }}>
      <Toolbar>
        <Typography variant="h5" color="#330e62">
          Mel Incögnito
        </Typography>
        <Container>
          <Tabs>
            <Tab label="Home" component={Link} to="/" />
            <Tab label="About Me" component={Link} to="/about" />

            <Tab label="My CV" component={Link} to="/mycv" />
            <Tab
              label="My Self-Taught Developer Journey"
              component={Link}
              to="/mydevjourney"
            />
            <Tab label="Contact Me" component={Link} to="/contact" />
          </Tabs>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
