import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaChartLine, FaTrophy, FaSearch } from "react-icons/fa";

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
