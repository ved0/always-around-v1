import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="header-list">
        <li className="header-list-item">
          <NavLink
            to="/"
            className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
          >
            Hem
          </NavLink>
        </li>
        <li className="header-list-item">
          <NavLink
            to="/about"
            className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
          >
            Om Projektet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
