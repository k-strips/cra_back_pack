import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <section className="footer--section">
        <div>
          <h5>social</h5>
        </div>
        <div>
          <h5>social</h5>
        </div>
        <div>
          {" "}
          <h5>social</h5>
        </div>
        <div>
          {" "}
          <h5>social</h5>
        </div>
      </section>
      <hr />
      <section className="footer--section">
        <small>
          devSteve {new Date().getFullYear()}, &copy; All rights reserved
        </small>
      </section>
    </footer>
  );
};

export default Footer;
