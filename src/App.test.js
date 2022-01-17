import React from "react";
import { render, screen } from "@testing-library/react";

import HomePage from "./pages/HomePage";

describe("HomePage", () => {
  test("renders homepage component", () => {
    render(<HomePage />);
    screen.debug();
  });
});

// Home page renders correcly
// It has everything displaying corrently, DOM tree is clean
