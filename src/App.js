import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// page imports
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Resources from "./pages/Resources";
import Layout from "./components/navigation/Layout";
import Services from "./pages/Services";
import ContactMePage from "./pages/ContactMe";
// theme imports
import { ThemeProvider } from "@mui/material";
import { Switch } from "@mui/material";
import theme from "./assets/theme";
import { darkTheme } from "./assets/theme";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Layout>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Switch
            color="success"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactMePage />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
