import React from "react";
import { Link } from "react-router-dom";
import "../../css/header/Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <Link style={linkStyle} to="/">
            <h1>Circles</h1>
          </Link>
        </div>
        <div id="navbar">
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link style={linkStyle} to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link style={linkStyle} to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none"
};
