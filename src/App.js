import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/navigation/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
    </Layout>
  );
}

export default App;
