import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

export default function Navbar() {

  return (
    <nav className="nav">
      <ul className="nav_list">
        <li className="nav_list_item">
          <Link to="/">Accueil</Link>
        </li>
        <li className="nav_list_item">
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
