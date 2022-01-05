import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <small>
        devSteve {new Date().getFullYear()}, &copy; All rights reserved
      </small>
    </footer>
  );
};

export default Footer;
