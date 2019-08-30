import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        tripstips
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/home"
              className={
                window.location.pathname === "/home" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
