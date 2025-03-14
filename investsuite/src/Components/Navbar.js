// Implementation of the navigation bar at the bottom of our REACT page. Gives the 4 windows the users can choose from.

import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaChartLine, FaTrophy, FaSearch } from "react-icons/fa";

// Main function returns the HTML code where the user can click and is sent to the right windows.
function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <FaHome />
      </NavLink>
      <NavLink
        to="/analytics"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <FaChartLine />
      </NavLink>
      <NavLink
        to="/competition"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <FaTrophy />
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <FaSearch />
      </NavLink>
    </div>
  );
}

export default Navbar;
