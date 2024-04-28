import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/button";
import PhotoLeft from "../../Assets/about-left.jpg";
import feature1 from "../../Assets/features/feature1.svg";
import feature2 from "../../Assets/features/feature2.svg";
import feature3 from "../../Assets/features/feature3.svg";
import feature4 from "../../Assets/features/feature4.svg";
import "./about.css";

const AboutPage = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutPage = document.querySelector(".about-page");
      const scrollPosition = window.scrollY + window.innerHeight;

      if (aboutPage.offsetTop < scrollPosition) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`about-page ${inView ? "in-view" : ""}`}>
      <h1>About Us</h1>
      <div className="first-part">
        <div className="left-img">
          <img src={PhotoLeft} alt="about" />
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

          <Link to="/who">
            <Button text="Get Started" />
          </Link>
        </div>
      </div>
      <div className="second-part">
        <h2>Key Features</h2>
        <div className="features">
          <div className="feature-list">
            <img src={feature1} alt="feature" />
            <p>A lot of Player Profiles</p>
          </div>
          <div className="feature-list">
            <img src={feature2} alt="feature" />
            <p>Intuitive Player Search</p>
          </div>
          <div className="feature-list">
            <img src={feature3} alt="feature" />
            <p>Advanced Filtering Options</p>
          </div>
          <div className="feature-list">
            <img src={feature4} alt="feature" />
            <p>Easy Access to Player Profiles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
