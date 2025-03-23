import React, { useState } from "react";

function AccountSettings() {
  const [image, setImage] = useState("/default-profile.png"); // Default image

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <div className="profile-container">
        <div className="profile-image">
          <img src={image} alt="Profile" id="profile-pic" />
          <label htmlFor="file-upload" className="upload-icon">
            📷
          </label>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="profile-info">
          <h3>Samrin</h3>
          <p>samrin@example.com</p>
        </div>
      </div>
      <p className="bio">
        "Passionate about technology and innovation. Always learning, always growing!" 🚀
      </p>
      <button className="save-btn">Save Changes</button>
      <br />
      <a href="/dashboard" className="back-link">Back to Dashboard</a>
    </div>
  );
}

export default AccountSettings;
