import React, { useState } from "react";
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
import { LinkedIn, GitHub } from "@mui/icons-material";
import ComputerIcon from "@mui/icons-material/Computer";
import FacebookIcon from "@mui/icons-material/Facebook";

//styles variables

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

const mobileTabsContainerStyles = {
  width: "20rem",
  height: "100%",
  display: "block",
  float: "left",
  bgcolor: "tercera.main",
  color: "tercera.light",
};

const mobileTabStyle = {
  display: "block",
  width: "100%",
  padding: "18px 20px",
};

const socialLinkContainerStyles = {
  display: "flex",
  flexWrap: "wrap",
  width: { xs: "18vw", md: "10vw" },
  justifyContent: "center",
};

const socialLinkStyles = {
  p: 0.5,
  cursor: "pointer",
};

const NavigationBar = () => {
  // state variables

  const [anchorElNav, setAnchorElNav] = useState(null);

  const [value, setValue] = useState("one");

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

  const socialLinks = [
    {
      id: 0,
      name: "GitHub",
      icon: (
        <GitHub
          onClick={() =>
            window.open("https://github.com/melxincognito", "_blank")
          }
          sx={socialLinkStyles}
          fontSize="large"
          role="button"
          aria-label="GitHub social link"
        />
      ),
    },
    {
      id: 1,
      name: "LinkedIn",
      icon: (
        <LinkedIn
          onClick={() =>
            window.open("https://www.linkedin.com/in/melgonzalez092/", "_blank")
          }
          sx={socialLinkStyles}
          fontSize="large"
          role="button"
          aria-label="LinkedIn social link"
        />
      ),
    },
    {
      id: 2,
      name: "HashNode Blog",
      icon: (
        <ComputerIcon
          onClick={() =>
            window.open("https://hashnode.com/@melxincognito", "_blank")
          }
          sx={socialLinkStyles}
          fontSize="large"
          role="button"
          aria-label="HashNode social link"
        />
      ),
    },

    {
      id: 3,
      name: "Facebook",
      icon: (
        <FacebookIcon
          onClick={() => {
            window.open(
              "https://www.facebook.com/MelxInc%C3%B6gnito-101595525789444",
              "_blank"
            );
          }}
          sx={socialLinkStyles}
          fontSize="large"
          role="button"
          aria-label="Facebook social link"
        />
      ),
    },
  ];

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
              <Container sx={mobileTabsContainerStyles}>
                <MenuItem component={Link} to="/" sx={mobileTabStyle}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/about" sx={mobileTabStyle}>
                  <Typography textAlign="center">About Me</Typography>
                </MenuItem>

                <MenuItem component={Link} to="/services" sx={mobileTabStyle}>
                  <Typography textAlign="center">Services</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/contact" sx={mobileTabStyle}>
                  <Typography textAlign="center">Contact Me</Typography>
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
              <Tab
                value="five"
                label="Contact Me"
                component={Link}
                to="/contact"
              />
            </Tabs>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={socialLinkContainerStyles}>
              {socialLinks.map((socialLink) => (
                <Box key={socialLink.id}>{socialLink.icon}</Box>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
