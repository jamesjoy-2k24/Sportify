import "./nav.css";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/button";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Sportify
        </Link>
      </div>
      <div className="nav-links">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/about">
          About
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/contact">
          Contact
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/faqs">
          FAQs
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/shop">
          Shop
        </Link>
      </div>
      <div className="nav-button">
        <Link style={{ textDecoration: "none", color: "black" }} to="/login">
          <Button text="Login" />
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/who">
          <Button text="Sign Up" />
        </Link>
      </div>
    </div>
  );
}
