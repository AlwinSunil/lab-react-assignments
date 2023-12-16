import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="wordmark">
        Kalvium❣️
      </Link>
      <div className="links">
        <Link to="/contacts">Contacts</Link>
        <Link to="/registration-form">Registration Form</Link>
      </div>
    </div>
  );
}

export default Navbar;
