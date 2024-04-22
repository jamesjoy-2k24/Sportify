import "./who.css";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/nav";
import Button from "../../Components/Button/button";

export default function Who() {
  return (
    <div>
      <Navbar />
      <div className="who">
        <h1>Who are You?</h1>
        <div className="who-left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <Link to={"/signup"}>
            <Button text="Sponsors" />
          </Link>
        </div>
        <div className="who-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <Link to={"/spman"}>
            <Button text="Sportsmen" />
          </Link>
        </div>
      </div>
    </div>
  );
}
