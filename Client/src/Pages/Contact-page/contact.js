import React, { useState } from "react";
import "./contact.css";
import Input from "../../Components/Input/input";
import Button from "../../Components/Button/button";
// import { Link } from "react-router-dom";
import ContactPhoto from "../../Assets/bg.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here, such as sending data to a server
    console.log("Form submitted with data:", formData);
    // Optionally, you can reset the form fields after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-img">
        <img src={ContactPhoto} alt="Contact" />
      </div>
      <div className="contact-form">
        <div className="contact-left">
          <h1>Contact Us</h1>
          <div className="contact-icon">
            <div className="first">
              <i class="fas fa-map-marker-alt"></i>
              <p>2nd cross Street, Vavuniya</p>
            </div>
            <div className="second">
              <i class="fas fa-envelope"></i>
              <p>jamesjoy2k24@gmail.com </p>
            </div>
            <div className="third">
              <i class="fas fa-phone-alt"></i>
              <p>+9477 835 2713</p>
            </div>
          </div>
        </div>
        <div className="contact-des">
          <p>
            "Unite Your Team, Elevate Your Game: Find Your Perfect Match Today!"
            With stellar one-click reports and unmatched support, see how Circle
            will make a difference in your business.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="contact-input">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" text="Submit" className="contact-button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
