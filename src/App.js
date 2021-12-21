import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import MyDevJourney from "./pages/MyDevJourney";

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
          <Route path="/mycv" element={<MyProjects />} />
          <Route path="/mydevjourney" element={<MyDevJourney />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
