import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/input";
import Button from "../../Components/Button/button";
import Photo from "../../Assets/login.jpg";

export default function Login() {
  return (
    <div className="login">
      <div className="login-left">
        <h1>Login</h1>
        <p>Login to access your account</p>
        <div className="login-input">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
        <div className="remember">
          <p>
            <Input type="checkbox" />
            Remember me
          </p>
          <Link style={{ textDecoration: "none", color: "red" }} to="/forget">
            Forget Password?
          </Link>
        </div>
        <Button text="Login" />
        <div className="dont">
          <p>
            Don't have an account?{" "}
            <Link style={{ textDecoration: "none", color: "red" }} to="/who">
              Sign up
            </Link>
          </p>
        </div>
        <p style={{ color: "gray" }}>or login with</p>
        <div className="login-icons">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <i className="fab fa-google"></i>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <i className="fab fa-facebook"></i>
          </Link>
        </div>
      </div>
      <div className="login-right">
        <img src={Photo} alt="login" />
      </div>
    </div>
  );
}
