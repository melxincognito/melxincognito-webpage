import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Nav Bar</Typography>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">My Projects</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
