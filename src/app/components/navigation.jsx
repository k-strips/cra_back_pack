import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
  { link: "/dashboad", text: "my dashboad" },
  { link: "/profile", text: "profile" },
  { link: "/notes", text: "my notes" },
  { link: "/todos", text: "todos" },
];

const Navigation = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        {routes.map((r, i) => (
          <li key={i}>
            <NavLink to={r.link}>{r.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
