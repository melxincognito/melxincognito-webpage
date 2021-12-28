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
          }}
        >
          <Tabs>
            <Tab label="Bio" onClick={this.updateBio} />
            <Tab label="My 2022 Goals" onClick={this.updateGoals} />
            <Tab
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
