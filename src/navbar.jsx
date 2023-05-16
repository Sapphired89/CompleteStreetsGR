import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./home">Home</Link>
        </li>
        <li>
          <Link to="./source">Sources</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;