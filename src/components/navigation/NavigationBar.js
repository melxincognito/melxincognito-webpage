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
        <Typography variant="h5">Mel Incögnito</Typography>
        <Container>
          <Tabs>
            <Tab label="Home" component={Link} to="/" />
            <Tab label="About Me" component={Link} to="/about" />

            <Tab label="My Projects" component={Link} to="/projects" />
            <Tab
              label="My Development Journey"
              component={Link}
              to="/mydevjourney"
            />
          </Tabs>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
