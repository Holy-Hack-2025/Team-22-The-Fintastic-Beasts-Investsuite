import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

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
