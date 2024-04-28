import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/button";
import Footer from "../../Components/Footer/footer";
import About from "../../Pages/About-page/about";
import Photo1 from "../../Assets/hero.jpg";
import Photo2 from "../../Assets/login.jpg";
import Photo3 from "../../Assets/bg.jpg";
import "./home.css";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    Photo1,
    Photo2,
    Photo3,
    Photo1,
    Photo2,
    Photo3,
    Photo1,
    Photo2,
    Photo3,

    Photo1,
    Photo2,
    Photo3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="landing-page">
        <section className="home-section">
          <div className="home-img">
            <div
              className="slider"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="slide"
                />
              ))}
            </div>
          </div>
          <div className="home-des">
            <h1>SPORTIFY</h1>
            <p>
              "Unite Your Team, Elevate Your Game: Find Your Perfect Match
              Today!" With stellar one-click reports and unmatched support, see
              how Circle will make a difference in your business.
            </p>
            <div className="home-btn">
              <Link to="/shop">
                <Button text="Shop Now" />
              </Link>
            </div>
          </div>
        </section>
        <section className="about-section" id="about-section">
          <About />
        </section>
        <section id="contact-section" className="contact-section"></section>

        <section className="footer-section">
          <Footer />
        </section>
      </div>
    </div>
  );
}
