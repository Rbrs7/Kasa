import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Houses from "./pages/Houses";
import Error from "./pages/NotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Houses />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
