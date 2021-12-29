import React from "react";

const AppLayout = ({ children }) => {
  return (
    <main className="container">
      <nav>
        <ul>
          <li>all notes</li>
          <li>all notes</li>
        </ul>
      </nav>
      {children}
      <footer>
        <small>
          devSteve {new Date().getFullYear()}, &copy; All rights reserved
        </small>
      </footer>
    </main>
  );
};

export default AppLayout;
