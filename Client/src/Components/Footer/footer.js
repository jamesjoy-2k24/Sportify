import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Button from "../Button/button";
import Input from "../Input/input";
import Photo2 from "../../Assets/footer.png";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-img">
          <img src={Photo2} alt="footer" />
        </div>
        <div className="get-touch">
          <h1>Get in touch</h1>
          <div className="get-touch-icons">
            <div className="first">
              <i className="fas fa-map-marker-alt"></i>
              <p>2nd cross Street, Vavuniya</p>
            </div>
            <div className="second">
              <i className="fas fa-envelope"></i>
              <p>jamesjoy2k24@gmail.com </p>
            </div>
            <div className="third">
              <i className="fas fa-phone-alt"></i>
              <p>+9477 835 2713</p>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <h1>Our Social Medias</h1>
          <div className="footer-social-icons">
            <div className="facebook">
              <i className="fab fa-facebook"></i>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Facebook
              </Link>
            </div>

            <div className="github">
              <i className="fab fa-instagram"></i>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <h1>Content</h1>
          <div className="footer-content-links">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/shop">
              Shop
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/contact"
            >
              Contact
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="footer-input">
          <h1>Join our newsletter</h1>
          <div className="footer-input-div">
            <p>Enter your email for updates!</p>
            <Input
              type="email"
              placeholder="Enter your email"
              style={{ width: "300px" }}
            />
            <div className="footer-input-btn">
              <Link to="/subscribe">
                <Button text="Subscribe" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2024. All rights reserved by Sportify</p>
      </div>
    </div>
  );
}
