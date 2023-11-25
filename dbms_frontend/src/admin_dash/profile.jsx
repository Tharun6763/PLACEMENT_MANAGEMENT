import React from "react";
import ProfileBox from "./ProfileBox"; // Assuming the file is in the same directory
import './profile.css';

function UserProfile() {
  const profileData = {
    name: "John Doe",
    username: "john_doe",
    email: "john@example.com",
    // imageUrl: "url-to-profile-image.jpg",
  };

  return (
    <div>
      <h1>User Profile</h1>
      <ProfileBox {...profileData} />
    </div>
  );
}

export default UserProfile;
