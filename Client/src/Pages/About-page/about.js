import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/button";
import PhotoLeft from "../../Assets/about-left.jpg";
import PhotoRight from "../../Assets/about-right.jpg";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <div className="first-part">
        <div className="left-img">
          <img src={PhotoLeft} alt="about"
          />
        </div>
        <div className="right-para">
          <h2>Who We Are:</h2>
          <p>
            Sportify is a platform that connects players with opportunities and
            helps teams achieve success on and off the field. We provide
            comprehensive player profiles, advanced player search and filtering
            options, and an intuitive interface that makes it easy for players
            to assess their skills, stats, and performance history. Our mission
            is to revolutionize the way teams recruit and scout players,
            providing a seamless and efficient platform that connects players
            with opportunities and helps teams achieve success on and off the
            field.
          </p>

          <Link to="/signup">
            <Button text="Get Started" />
          </Link>
        </div>
      </div>
      <div className="second-part">
          <div className="left-para">
          <h2>Key Features:</h2>
            <ul>
              <li>Comprehensive Player Profiles</li>
              <li>Advanced Player Search</li>
              <li>Filtering Options</li>
              <li>Intuitive Interface</li>
            </ul>
          </div>

      </div>
    </div>
  );
};

export default AboutPage;
