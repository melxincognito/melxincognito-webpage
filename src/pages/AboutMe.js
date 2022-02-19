import React, { Component } from "react";
import AboutMeBio from "../components/aboutMeContent/AboutMeBio";
import BottomNavigationLabel from "../components/navigation/BottomNavigation";

export default class AboutMe extends Component {
  render() {
    return (
      <>
        <AboutMeBio />
        <BottomNavigationLabel />
      </>
    );
  }
}
