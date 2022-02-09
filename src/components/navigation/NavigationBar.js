import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  // values for the tab indicator color
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // styles as consts to prevent crowding in code
  const appBarStyles = {
    background:
      "linear-gradient(to right, #c62828, #ff8f00, #ffd600, #388e3c, #0277bd, #303f9f, #e91e63 )",
    padding: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
  };

  const appBarContainerStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  };

  const tabsStyles = {
    bgcolor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 5,
    pt: 1.3,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
  };

  const socialLinkStyles = {
    p: 0.5,
  };

  // functions for page clicks to external redes sociales
  function twitterPageClick() {
    window.open("https://www.twitter.com/melxincognito", "_blank");
  }

  function youtubePageClick() {
    window.open(
      "https://www.youtube.com/channel/UCIsEgMaokVbYBt6siV9y1NQ/videos",
      "_blank"
    );
  }
  function githubPageClick() {
    window.open("https://github.com/melxincognito", "_blank");
  }

  function linkedInPageClick() {
    window.open("https://www.linkedin.com/in/melgonzalez092/", "_blank");
  }

  return (
    <AppBar position="fixed" sx={appBarStyles}>
      <Toolbar>
        <Typography variant="h5" color="white">
          Mel Incögnito
        </Typography>
        <Container sx={appBarContainerStyles}>
          <Tabs
            sx={tabsStyles}
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
              label="Services"
              component={Link}
              to="/services"
            />
            <Tab
              value="five"
              label="Resources"
              component={Link}
              to="/resources"
            />
          </Tabs>
        </Container>
        <Box display="grid">
          <Box display="flex">
            <Twitter
              sx={socialLinkStyles}
              fontSize="large"
              onClick={twitterPageClick}
            />
            <YouTubeIcon
              sx={socialLinkStyles}
              fontSize="large"
              onClick={youtubePageClick}
            />
          </Box>
          <Box>
            <GitHub
              sx={socialLinkStyles}
              fontSize="large"
              onClick={githubPageClick}
            />
            <LinkedIn
              sx={socialLinkStyles}
              fontSize="large"
              onClick={linkedInPageClick}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
