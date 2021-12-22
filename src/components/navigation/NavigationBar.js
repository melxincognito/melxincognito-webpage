import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Tabs,
  Tab,
} from "@mui/material";
import { Twitter, LinkedIn, Instagram, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  function twitterPageClick() {
    window.open("https://www.twitter.com/melxincognito", "_blank");
  }

  function instagramPageClick() {
    window.open("https://www.instagram.com/melxincognito/", "_blank");
  }
  function githubPageClick() {
    window.open("https://github.com/melxincognito", "_blank");
  }

  function linkedInPageClick() {
    window.open("https://www.linkedin.com/in/melgonzalez092/", "_blank");
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
              label="My Developer Journey"
              component={Link}
              to="/mydevjourney"
            />
          </Tabs>
        </Container>

        <Twitter sx={{ p: 0.5 }} fontSize="large" onClick={twitterPageClick} />
        <Instagram
          sx={{ p: 0.5 }}
          fontSize="large"
          onClick={instagramPageClick}
        />

        <GitHub sx={{ p: 0.5 }} fontSize="large" onClick={githubPageClick} />
        <LinkedIn
          sx={{ p: 0.5 }}
          fontSize="large"
          onClick={linkedInPageClick}
        />
      </Toolbar>
    </AppBar>
  );
}
