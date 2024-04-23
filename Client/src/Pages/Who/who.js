import "./who.css";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/nav";
import Button from "../../Components/Button/button";

export default function Who() {
  return (
    <div>
      <div className="who">
        <h1>Who are You?</h1>
        <div className="who-left"> 
          <Link to={"/signup"}>
            <Button text="Sponsors" />
          </Link>
        </div>
        <div className="who-right">
          <Link to={"/spman"}>
            <Button text="Sportsmen" />
          </Link>
        </div>
      </div>
    </div>
  );
}
