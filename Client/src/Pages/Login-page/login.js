import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/input";
import Button from "../../Components/Button/button";
import Photo from "../../Assets/login.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://example.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Login successful!");
        setError("");
      } else {
        const data = await response.json();
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div>
      <div className="login-img">
        <img src={Photo} alt="Login-background" />
      </div>
      <div className="login-container">
        <div className="login-form">
          <div className="login-left">
            <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h1>
            <p
              style={{
                marginBottom: "1rem",
                color: "black",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              Login to access your account
            </p>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="login-input-group">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="login-options">
                <div className="remember">
                  <Input type="checkbox" />
                  <label style={{ marginLeft: "10px" }}>Remember me</label>
                </div>
                <Link className="forgot-password" to="/forget">
                  Forget Password?
                </Link>
              </div>

              <Button text="Login" className="login-button" />

              <div className="signup-option">
                <p>
                  Don't have an account?{" "}
                  <Link className="signup-link" to="/who">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>

            <p className="or-login-with">or login with</p>

            <div className="social-login">
              <Link className="google-login" to="/">
                <i className="fab fa-google" style={{ color: "black" }}></i>
              </Link>
              <Link className="facebook-login" to="/">
                <i className="fab fa-facebook" style={{ color: "black" }}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
