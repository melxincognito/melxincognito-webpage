import React from "react";
import { render, screen } from "@testing-library/react";

import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import AboutMeBio from "./components/aboutMeContent/AboutMeBio";
import AboutMeGoals from "./components/aboutMeContent/AboutMeGoals";
import AboutMeTravelLocations from "./components/aboutMeContent/AboutMeTravelLocations";

describe("HomePage", () => {
  test("renders homepage component", () => {
    render(<HomePage />);
  });
});

// Home page renders correcly
// It has everything displaying corrently, DOM tree is clean

describe("About Me Page", () => {
  test("renders Bio content", () => {
    render(<AboutMeBio />);
  });
});

describe("About Me Page", () => {
  test("renders Goals content", () => {
    render(<AboutMeGoals />);
  });
});

describe("About Me Page", () => {
  test("renders Travel Locations content", () => {
    render(<AboutMeTravelLocations />);
  });
});

describe("About Me Page", () => {
  test("renders main About Me Page", () => {
    render(<AboutMe />);
  });
});
