import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import ContactPage from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/navigation/Layout";

import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contactMe" element={<ContactPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
