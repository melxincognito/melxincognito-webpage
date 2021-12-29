import { Container, Box, Tabs, Tab, Typography } from "@mui/material";
import React, { Component } from "react";
import AboutMeBio from "../components/aboutMeContent/AboutMeBio";
import AboutMeGoals from "../components/aboutMeContent/AboutMeGoals";
import AboutMeTravelLocations from "../components/aboutMeContent/AboutMeTravelLocations";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: <AboutMeBio />,
    };
  }

  updateBio = () => {
    this.setState({ message: <AboutMeBio /> });
  };

  updateGoals = () => {
    this.setState({ message: <AboutMeGoals /> });
  };

  updateTravelLocations = () => {
    this.setState({ message: <AboutMeTravelLocations /> });
  };

  render() {
    return (
      <Container sx={{ display: "grid", alignContent: "center" }}>
        <Container
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginBottom: 3,
          }}
        >
          <Tabs
            style={{
              background:
                "linear-gradient(to left, #c62828, #ff8f00, #ffd600, #388e3c, #0277bd, #303f9f, #e91e63 )",
              padding: 5,
              borderRadius: 25,
            }}
            indicatorColor="black"
          >
            <Tab value="one" label="Bio" onClick={this.updateBio} />
            <Tab value="two" label="My 2022 Goals" onClick={this.updateGoals} />
            <Tab
              value="three"
              label="My Favorite Places"
              onClick={this.updateTravelLocations}
            />
          </Tabs>
        </Container>
        <Container>
          <Box>
            <Typography> {this.state.message}</Typography>
          </Box>
        </Container>
      </Container>
    );
  }
}

export default AboutMe;
