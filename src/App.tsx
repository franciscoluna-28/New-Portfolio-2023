

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Proyects";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </main>

    </BrowserRouter>
  );
}

export default App;

// The difference between Link and Navlink is that the last component includes
// the active attribute within the HTML. It's useful to style active links