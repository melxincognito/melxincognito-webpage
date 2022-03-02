import React from "react";
import { Route, Routes } from "react-router-dom";
// page imports
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Resources from "./pages/Resources";
import Layout from "./components/navigation/Layout";
import Services from "./pages/Services";
import ContactMePage from "./pages/ContactMe";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactMePage />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Layout>
  );
}

export default App;
