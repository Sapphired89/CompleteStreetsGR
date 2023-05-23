import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="./home">Home</Link>
        </li>
        <li>
          <Link to="./source">Info</Link>
        </li>
        <li>
          <Link to="./graphic">Graphic</Link>
        </li>
        <li>
          <Link to="./form">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;