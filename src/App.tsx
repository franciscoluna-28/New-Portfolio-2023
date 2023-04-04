import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <body className="bg-white dark:bg-mainExtraDarkBlue">
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </main>
      </body>
    </BrowserRouter>
  );
}

export default App;

// The difference between Link and Navlink is that the last component includes
// the active attribute within the HTML. It's useful to style active links