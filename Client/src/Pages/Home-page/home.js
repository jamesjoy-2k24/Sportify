import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Button from "../../Components/Button/button";
import Footer from "../../Components/Footer/footer";
import About from "../../Pages/About-page/about";
import Input from "../../Components/Input/input";
import PhotoContact from "../../Assets/bg.jpg";
import Photo1 from "../../Assets/hero.jpg";
import "./home.css";

export default function Home() {
  const scrollToAbout = () => {
    scroll.scrollTo("#about-section", {
      smooth: "easeInOutQuart",
      duration: 800,
    });
  };

  const scrollToContact = () => {
    scroll.scrollTo("#contact-section", {
      smooth: "easeInOutQuart",
      duration: 800,
    });
  };

  return (
    <div>
      <div className="landing-page">
        <section className="home-section">
          <div className="home-img">
            <img src={Photo1} alt="hero" />
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
        <section id="contact-section" className="contact-section">
          <div className="contact-form">
            <div className="contact-img-left">
              <img src={PhotoContact} alt="hero" />
            </div>
            <div className="contact-des">
              <h1>Contact Us</h1>
              <p>
                "Unite Your Team, Elevate Your Game: Find Your Perfect Match
                Today!" With stellar one-click reports and unmatched support,
                see how Circle will make a difference in your business.
              </p>
              <div className="contact-input">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Subject" />
                <Input type="text" placeholder="Message" />
                <Link to="/home">
                  <Button text="Submit" className="contact-button" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-section">
          <Footer />
        </section>
      </div>
    </div>
  );
}
