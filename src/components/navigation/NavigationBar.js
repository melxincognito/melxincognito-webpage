import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Tabs,
  Tab,
} from "@mui/material";
import { Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  function twitterPageClick(e) {
    e.preventDefault();
    window.open("https://www.twitter.com/melxincognito", "_blank");
  }
  function linkedInPageClick(e) {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/melgonzalez092/", "_blank");
  }
  function instagramPageClick(e) {
    e.preventDefault();
    window.open("https://www.instagram.com/melxincognito/", "_blank");
  }

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

        <Twitter onClick={twitterPageClick} />
        <Instagram onClick={instagramPageClick} />
        <LinkedIn onClick={linkedInPageClick} />
      </Toolbar>
    </AppBar>
  );
}
