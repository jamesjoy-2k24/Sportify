import "./profileedit.css";
import Button from "../../Components/Button/button";
import { useState } from "react";
import Profile from "../../Assets/sportman.jpg";

export default function Spman() {
  const [profileData, setProfileData] = useState({
    name: "Joy",
    club: "Jeeva Sports Club",
    sports: "Soccer",
    location: "Vavuniya",
  });
  const [profilePicture, setProfilePicture] = useState(Profile);

  const handleProfileDataChange = (field, value) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Logic to submit changes to the server
    console.log("Profile data:", profileData);
    console.log("Profile picture:", profilePicture);
  };

  return (
    <div className="sponsor">
      <div className="sponsor-content">
        <div className="sponsor-profile">
          <p>Edit Profile Photo</p>
          <input type="file" onChange={handlePictureChange} />
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      handleProfileDataChange("name", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Club</th>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    value={profileData.club}
                    onChange={(e) =>
                      handleProfileDataChange("company", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Sports</th>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    value={profileData.sports}
                    onChange={(e) =>
                      handleProfileDataChange("location", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <th>Photos of matches including you</th>
                <td>:</td>
                <td>
                  <input
                    type="file"
                    onChange={(e) =>
                      handleProfileDataChange("location", e.target.value)
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Button text="Save Changes" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
