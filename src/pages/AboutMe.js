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
              background: "#c5cae9",
              text: "white",
              padding: 5,
              borderRadius: 25,
            }}
          >
            <Tab
              sx={{ borderRight: "dotted #fff4fa" }}
              value="one"
              label="Bio"
              onClick={this.updateBio}
            />
            <Tab
              sx={{ borderRight: "dotted #fff4fa" }}
              value="two"
              label="2022 Goals"
              onClick={this.updateGoals}
            />
            <Tab
              value="three"
              label="Favorite Locations"
              onClick={this.updateTravelLocations}
            />
          </Tabs>
        </Container>
        <Container>
          <Box>
            <Typography component={"div"}> {this.state.message}</Typography>
          </Box>
        </Container>
      </Container>
    );
  }
}

/* have to add component={'div'} to Typography or you'll get an error message that your
objects aren't nesting correctly when they're getting imported from the other pages */

export default AboutMe;
