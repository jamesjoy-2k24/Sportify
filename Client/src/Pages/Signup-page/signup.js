import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/input";
import Button from "../../Components/Button/button";
import Photo from "../../Assets/login.jpg";

export default function Signup() {
  return (
    <div className="form">
      <div className="signup-left">
        <img src={Photo} alt="login" />
      </div>
      <div className="signup-right">
        <h1>Signup</h1>
        <p>Lets get you all set up so you can start using our app.</p>
        <div className="signup-input">
          <div className="first">
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="Last name" />
          </div>
          <div className="second">
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Phone Number" />
          </div>
          <Input type="text" placeholder="Company / Club Name" />
          <Input type="text" placeholder="Location" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </div>
        <div className="terms">
          <Input type="checkbox" />
          <p>
            I agree to the{" "}
            <Link style={{ textDecoration: "none", color: "red" }} to="/terms">
              Terms and Conditions
            </Link>
          </p>
        </div>
        <Button text="Signup" />
        <div className="already">
          <p>
            Already have an account?{" "}
            <Link style={{ textDecoration: "none", color: "red" }} to="/login">
              Login
            </Link>
          </p>
        </div>
        <p style={{ color: "gray" }}>or signup with</p>
        <div className="signup-icons">
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
  );
}
