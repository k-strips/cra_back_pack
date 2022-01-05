import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <NavLink to="/notes">my notes</NavLink>
        </li>
        <li>all notes</li>
      </ul>
    </nav>
  );
};

export default Navigation;
