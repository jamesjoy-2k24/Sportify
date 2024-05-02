import React, { useState } from "react";
import "./admin.css";
import Profile from "../../Assets/logo.png";
import Dashboard from "../Dashboard-page/dashboard"
import Sponsor from "../Dashboard-page/sponsor";
import Button from "../../Components/Button/button";
// import { useLocation } from "react-router-dom";

export default function Admin() {
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");
  // const location = useLocation();

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  return (
    <div className="admin">
      <div className="admin-sidebar">
        <div className="admin-sidebar-title">
          <h3>Joy</h3>
        </div>
        <div className="admin-sidebar-items">
          <div
            className={`admin-sidebar-item ${
              activeNavItem === "Dashboard" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("Dashboard")}
          >
            <i className="fa fa-dashboard"></i>
            <p>Dashboard</p>
          </div>
          <div
            className={`admin-sidebar-item ${
              activeNavItem === "Sportsmen" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("Sportsmen")}
          >
            <i className="fa fa-user"></i>
            <p>Sportsmen</p>
          </div>
          <div
            className={`admin-sidebar-item ${
              activeNavItem === "Sponsors" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("Sponsors")}
          >
            <i className="fa fa-user"></i>
            <p>Sponsors</p>
          </div>
          <div
            className={`admin-sidebar-item ${
              activeNavItem === "Notifications" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("Notifications")}
          >
            <i className="fa fa-bell"></i>
            <p>Notifications</p>
          </div>
          <div
            className={`admin-sidebar-item ${
              activeNavItem === "Payments" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("Payments")}
          >
            <i className="fa fa-ticket"></i>
            <p>Payments</p>
          </div>
          <Button text="Logout" />
        </div>
      </div>
      <div className="admin-content">
        <div className="first-content-head">
          <h1>Hello Joy!</h1>
          <img src={Profile} alt="profile"></img>
        </div>
        <div className="second-content">
          {activeNavItem === "Dashboard" && <Dashboard />}
          {activeNavItem === "Sponsors" && <Sponsor />}
        </div>
      </div>
    </div>
  );
}
