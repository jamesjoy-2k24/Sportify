import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/button";
import Footer from "../../Components/Footer/footer";
import About from "../../Pages/About-page/about";
import Photo1 from "../../Assets/hero.jpg";
import "./home.css";

export default function Home() {


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

        </section>

        <section className="footer-section">
          <Footer />
        </section>
      </div>
    </div>
  );
}
