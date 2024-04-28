import "./who.css";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/button";
import sponsor from "../../Assets/sponsor.jpg";
import spman from "../../Assets/sportman.jpg";

export default function Who() {
  return (
    <div className="main">
      <div className="title">
        <h1>Who are You?</h1>
      </div>
      <div className="who">
        <div className="who-left">
          <img src={sponsor} alt="sponsor" />
          <Link to={"/signup"}>
            <Button text="Sponsor" />
          </Link>
        </div>
        <div className="who-right">
          <img src={spman} alt="spman" />
          <Link to={"/spman"}>
            <Button text="Sportsmen" />
          </Link>
        </div>
      </div>
    </div>
  );
}
