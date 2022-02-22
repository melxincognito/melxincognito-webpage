import * as React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tabs,
  Tab,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";

const NavigationBar = () => {
  // state variables

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [value, setValue] = React.useState("one");

  // handle event variables

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // nav styles variables

  const appBarStyles = {
    bgcolor: "primary.main",
    padding: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    color: "secondary.light",
  };

  const tabsContainerStyles = {
    flexGrow: 1,
    alignContent: "center",
    justifyContent: "center",
    display: { xs: "none", md: "flex" },
  };

  const tabsStyles = {
    bgcolor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 5,
    pt: 1.3,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
  };

  const mobileTabStyle = {
    display: "block",
    width: "100%",
    padding: "18px 20px",
  };

  const socialLinkStyles = {
    p: 0.5,
  };

  // social link external page routes

  function twitterPageClick() {
    window.open("https://www.twitter.com/melxincognito", "_blank");
  }

  function youtubePageClick() {
    window.open(
      "https://www.youtube.com/channel/UCIsEgMaokVbYBt6siV9y1NQ",
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
    <AppBar position="static" sx={appBarStyles}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Mel Incögnito
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Container
                sx={{
                  width: "30em",
                  height: "100%",
                  display: "block",
                  float: "left",
                  bgcolor: "tercera.main",
                  color: "tercera.light",
                }}
              >
                <MenuItem component={Link} to="/" sx={mobileTabStyle}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/about" sx={mobileTabStyle}>
                  <Typography textAlign="center">About Me</Typography>
                </MenuItem>

                <MenuItem component={Link} to="/services" sx={mobileTabStyle}>
                  <Typography textAlign="center">Services</Typography>
                </MenuItem>
              </Container>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Mel Incögnito
          </Typography>
          <Box sx={tabsContainerStyles}>
            <Tabs
              sx={tabsStyles}
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab value="one" label="Home" component={Link} to="/" />
              <Tab value="two" label="About Me" component={Link} to="/about" />

              <Tab
                value="three"
                label="Services"
                component={Link}
                to="/services"
              />
              <Tab
                value="four"
                label="Resources"
                component={Link}
                to="/resources"
              />
            </Tabs>
          </Box>

          <Box display="grid" sx={{ flexGrow: 0 }}>
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
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
