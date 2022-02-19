import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import Resources from "./pages/Resources";

import Layout from "./components/navigation/Layout";
import Services from "./pages/Services";
import { ThemeProvider } from "@mui/material";
import { Switch } from "@mui/material";
import theme from "./assets/theme";
import { darkTheme } from "./assets/theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Layout>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Switch
            color="warning"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/mycv" element={<MyProjects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
