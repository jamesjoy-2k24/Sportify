import "./who.css";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/button";

export default function Who() {
  return (
    <div>
      <div className="who">
      <div className="title">
        <h1>Who are You?</h1>
      </div>
        <div className="who-left">
          <Link to={"/signup"}>
            <Button text="Sponsor" />
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
