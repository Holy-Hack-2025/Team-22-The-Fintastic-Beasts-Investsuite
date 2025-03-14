// This is the implementation for the top menu where the name of the app is displayed and there is a button to go to the profile page.

import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

// Main function provides the HTML code.
const TopMenu = () => {
  return (
    <div className="top-menu">
      <h1>stockWHALE</h1>
      <NavLink
        to="/profilepage"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <FaUser />
      </NavLink>
    </div>
  );
};

export default TopMenu;
