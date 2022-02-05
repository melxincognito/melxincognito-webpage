import { Container, Box, Tabs, Tab } from "@mui/material";
import React, { Component } from "react";
import AboutMeBio from "../components/aboutMeContent/AboutMeBio";
import AboutMeGoals from "../components/aboutMeContent/AboutMeGoals";
import AboutMeTravelLocations from "../components/aboutMeContent/AboutMeTravelLocations";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: <AboutMeBio />,
      selectedTab: 0,
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
    const mainContainerStyles = {
      display: "grid",
      alignContent: "center",
    };

    const tabsContainerStyles = {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      marginBottom: 3,
    };

    const tabsStyles = {
      background: "#c5cae9",
      text: "white",
      padding: 5,
      borderRadius: 25,
      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    };

    const tabBorderStyles = {
      borderRight: "dotted #fff4fa",
    };
    return (
      <Container sx={mainContainerStyles}>
        <Container sx={tabsContainerStyles}>
          <Tabs style={tabsStyles}>
            <Tab
              sx={tabBorderStyles}
              value={this.selectedTab}
              label="Bio"
              onClick={this.updateBio}
            />
            <Tab
              sx={tabBorderStyles}
              value={this.selectedTab}
              label="2022 Goals"
              onClick={this.updateGoals}
            />
            <Tab
              value={this.selectedTab}
              label="Favorite Locations"
              onClick={this.updateTravelLocations}
            />
          </Tabs>
        </Container>
        <Container>
          <Box>
            <div> {this.state.message} </div>
          </Box>
        </Container>
      </Container>
    );
  }
}

export default AboutMe;
