import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import CV from "./pages/CV";

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
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/clothescollection" element={<CV />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
