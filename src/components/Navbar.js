import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="nav">
      <ul className="nav_list">
        <li
          className={`nav_list_item ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <Link to="/">Accueil</Link>
        </li>
        <li
          className={`nav_list_item ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
