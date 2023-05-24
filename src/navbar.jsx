import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links" style={{ overflowX: "auto", whiteSpace: "nowrap", minWidth: "100%" }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/graphic" className="link">Graphic</Link>
        </li>
        <li>
          <Link to="/form">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
