import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Houses from "./pages/Houses";
import Error from "./pages/NotFound";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Houses />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
