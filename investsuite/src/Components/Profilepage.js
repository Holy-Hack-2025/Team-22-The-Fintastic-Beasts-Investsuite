// Implementation of a profilepage in the REACT app when clicked on the user page.

import React, { useState } from "react";
import users from "./Users.json";

// User can give their first- and lastname and invite a friend.
function ProfilePage() {
  const current_user = users.find((user) => user.name === "Maxim");
  const [firstName, setFirstName] = useState(current_user.name);
  const [lastName, setLastName] = useState(current_user.lastName);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // This HTML has options to note their first- and last name and give an email of someone to befriend.
  return (
    <div className="content-area">
      <div className="profile-page">
        <h2>Edit Profile</h2>

        {/* First Name */}
        <div className="input-group">
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        {/* Last Name */}
        <div className="input-group">
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Add a Friend:</label>
          <input
            type="email"
            placeholder="Enter friend's email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button>Add Friend</button>
      </div>
    </div>
  );
}

export default ProfilePage;
