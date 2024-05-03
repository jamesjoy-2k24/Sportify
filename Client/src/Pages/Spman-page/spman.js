import "./spman.css";
import Button from "../../Components/Button/button";
import { useState } from "react";
import Profile from "../../Assets/sportman.jpg";
import ProfileEdit from "./profileedit";

export default function Sponsor() {
  const [activeNavItem, setActiveNavItem] = useState("Profile");
  const [profileData, setProfileData] = useState({
    name: "Joy",
    club: "Jeeva Sports Club",
    sports: "Soccer",
    location: "Vavuniya",
  });

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  const handleProfileDataChange = (field, value) => {
    setProfileData({ ...profileData, [field]: value });
  };

  return (
    <div className="sponsor">
      <div className="sponsor-sidebar">
        <div className="sponsor-sidebar-header">
          <h2>Welcome back!</h2>
        </div>
        <div className="sponsor-sidebar-items">
          <div
            className={`sponsor-sidebar-item ${
              activeNavItem === "Profile" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("Profile")}
          >
            <i className="fa fa-user"></i>
            <p>Profile</p>
          </div>
          <div
            className={`sponsor-sidebar-item ${
              activeNavItem === "Settings" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("Settings")}
          >
            <i className="fa fa-cog"></i>
            <p>Settings</p>
          </div>
          <Button text="Logout" />
        </div>
      </div>
      <div className="sponsor-content">
        {activeNavItem === "Profile" && (
          <div className="sponsor-profile">
            <div className="sponsor-profile-img">
              <img src={Profile} alt="Profile" />
            </div>
            <div className="sponsor-profile-details">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>:</td>
                    <td>{profileData.name}</td>
                  </tr>
                  <tr>
                    <th>Club</th>
                    <td>:</td>
                    <td>{profileData.club}</td>
                  </tr>
                  <tr>
                    <th>sports</th>
                    <td>:</td>
                    <td>{profileData.sports}</td>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <td>:</td>
                    <td>{profileData.location}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeNavItem === "Settings" && (
          <ProfileEdit
            profileData={profileData}
            onProfileDataChange={handleProfileDataChange}
          />
        )}
      </div>
    </div>
  );
}
