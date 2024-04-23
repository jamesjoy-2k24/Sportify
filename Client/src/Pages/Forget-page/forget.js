import React from "react";
import "./forget.css";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/input";
import Button from "../../Components/Button/button";
import Photo from "../../Assets/login.jpg";

export default function Forget() {
  return (
    <div className="form">
      <div className="forget">
        <div className="forget-right">
          <img src={Photo} alt="login" />
        </div>
        <div className="forget-left">
          <h1>Forgot your password</h1>
          <p>
            Don't worry, happens to all of us. Enter your email below to recover
            your password
          </p>
          <div className="forget-input">
            <Input type="email" placeholder="Email" />
          </div>
          <Link to="/verify">
            <Button text="Submit" />
          </Link>
          <p style={{ color: "gray" }}>or login with</p>
          <div className="forget-icons">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <i className="fab fa-google"></i>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
