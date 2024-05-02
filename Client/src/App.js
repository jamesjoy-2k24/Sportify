import React from "react";
import { Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Navbar from "./Components/Navbar/nav";
import Admin from "./Pages/Admin-page/admin";
import Dashboard from "./Pages/Dashboard-page/dashboard";
import Sponsor from "./Pages/Sponsor-page/sponsor";
import Sportman from "./Pages/Spman-page/spman";
import Contact from "./Pages/Contact-page/contact";
import Home from "./Pages/Home-page/home";
import Faqs from "./Pages/Faq-page/faq";
import Shop from "./Pages/Shop-page/shop";
import Login from "./Pages/Login-page/login";
import Forget from "./Pages/Forget-page/forget";
import Signup from "./Pages/Signup-page/signup";
import Spman from "./Pages/Signup-page-spman/signup";
import Who from "./Pages/Who/who";
import Verify from "./Pages/Verify-page/verify";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/sportman" element={<Sportman />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/who" element={<Who />} />
        <Route path="/spman" element={<Spman />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </div>
  );
}

export default App;
