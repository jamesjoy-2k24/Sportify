import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Button/button";
import "./nav.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className={`nav ${menuOpen ? "open" : ""}`}>
      <div className="nav-logo">
        <ScrollLink
          to="home-section"
          smooth="true"
          duration={800}
          onClick={closeMenu}
          role="button"
          tabIndex="0"
        >
          SPORTIFY
        </ScrollLink>
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          onClick={closeMenu}
          activeclassname="active"
          role="button"
          tabIndex="0"
        >
          Home
        </NavLink>
        <ScrollLink
          to="about-section"
          smooth="true"
          duration={800}
          onClick={closeMenu}
          role="button"
          tabIndex="0"
        >
          About
        </ScrollLink>
        <NavLink
          to="/contact"
          smooth="true"
          duration={800}
          onClick={closeMenu}
          role="button"
          tabIndex="0"
        >
          Contact
        </NavLink>
        <NavLink to="/shop" onClick={closeMenu} role="button" tabIndex="0">
          Shop
        </NavLink>
        <div className={`nav-button ${menuOpen ? "open" : ""}`}>
          <NavLink to="/login" onClick={closeMenu} role="button" tabIndex="0">
            <Button text="Login" />
          </NavLink>
        </div>
      </div>
      <FontAwesomeIcon
        icon={menuOpen ? faTimes : faBars}
        className={`menu-icon ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        role="button"
        tabIndex="0"
      />
    </nav>
  );
}
