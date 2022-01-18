import React from "react";
import { render, screen } from "@testing-library/react";

import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import AboutMeBio from "./components/aboutMeContent/AboutMeBio";
import AboutMeGoals from "./components/aboutMeContent/AboutMeGoals";
import AboutMeTravelLocations from "./components/aboutMeContent/AboutMeTravelLocations";
import Resources from "./pages/Resources";
import MyDevJourney from "./pages/MyDevJourney";

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

/* had to fix the nexting issue on About Me page by changing <Typography> Element to a <div> 
element. The nesting was getting messed up because using Typography was rendering like:
<p>
<div> </div>
</p> 
*/
// Still need to fix Tab Value issue

describe("Resources Page", () => {
  test("renders main Resources Page", () => {
    render(<Resources />);
  });
});

/* 
Resources Page also having nesting issues and issues w the Tab value.
*/

describe("My Dev Journey", () => {
  test("renders My Dev Journey Page", () => {
    render(<MyDevJourney />);
    screen.debug();
  });
});

/* fix the amount of divs you're having rendered on my dev journey. It doesn't need that many
containers on it.*/
