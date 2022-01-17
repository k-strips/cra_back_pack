import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const routes = [
  { link: "/dashboard", text: "my dashboad" },
  { link: "/profile", text: "profile" },
  { link: "/notes", text: "my notes" },
  { link: "/pages", text: "all pages" },
  { link: "/todos", text: "todos" },
];

const Navigation = ({ className }) => {
  const [IsShow, setIsShow] = useState(false);

  return (
    <nav className={className}>
      <h3>Back Pack</h3>
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
