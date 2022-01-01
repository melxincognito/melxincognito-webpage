import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import { Twitter, LinkedIn, Instagram, GitHub } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <AppBar
      position="fixed"
      sx={{
        background:
          "linear-gradient(to right, #c62828, #ff8f00, #ffd600, #388e3c, #0277bd, #303f9f, #e91e63 )",
        padding: 2,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" color="white">
          Mel Incögnito
        </Typography>
        <Container
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Tabs
            sx={{ bgcolor: "rgba(255, 255, 255, 0.35)", borderRadius: 5 }}
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab value="one" label="Home" component={Link} to="/" />
            <Tab value="two" label="About Me" component={Link} to="/about" />

            <Tab value="three" label="My CV" component={Link} to="/mycv" />
            <Tab
              value="four"
              label="My Developer Journey"
              component={Link}
              to="/mydevjourney"
            />
            <Tab
              value="five"
              label="Resources"
              component={Link}
              to="/resources"
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
