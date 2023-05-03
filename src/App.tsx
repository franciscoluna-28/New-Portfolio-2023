import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./context/DarkModeContext";
import { RefProvider } from "./context/ScrollContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <RefProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    </RefProvider>
  );
}

export default App;
