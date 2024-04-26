import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      closeMenu(); // Close menu after scrolling
    }
  };

  return (
    <nav className={`nav ${menuOpen ? "open" : ""}`}>
      <div className="nav-logo">
        <ScrollLink
          to="home-section" // ID of the target section in the home page
          smooth={true} // Enable smooth scrolling
          duration={800} // Duration of the scroll animation
          onClick={closeMenu} // Close menu after clicking
          role="button"
          tabIndex="0"
        >
          Sportify
        </ScrollLink>
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ScrollLink
          to="home-section"
          smooth={true}
          duration={800}
          onClick={closeMenu}
          role="button"
          tabIndex="0"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about-section"
          smooth={true}
          duration={800}
          onClick={closeMenu}
          role="button"
          tabIndex="0"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="contact-section"
          smooth={true}
          duration={800}
          onClick={closeMenu}
          role="button"
          tabIndex="0"
        >
          Contact
        </ScrollLink>
        <ScrollLink
          to="shop-section"
          smooth={true}
          duration={800}
          onClick={closeMenu}
          role="button"
          tabIndex="0"
        >
          Shop
        </ScrollLink>
      </div>
      <div className={`nav-button ${menuOpen ? "open" : ""}`}>
        <NavLink to="/login" onClick={closeMenu} role="button" tabIndex="0">
          <Button text="Login" />
        </NavLink>
        <NavLink to="/who" onClick={closeMenu} role="button" tabIndex="0">
          <Button text="Sign Up" />
        </NavLink>
      </div>
      <FontAwesomeIcon
        icon={menuOpen ? faTimes : faBars}
        className="menu-icon"
        onClick={toggleMenu}
        role="button"
        tabIndex="0"
      />
    </nav>
  );
}
