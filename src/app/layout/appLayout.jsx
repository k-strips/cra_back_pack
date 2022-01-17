import React from "react";
import { Outlet } from "react-router-dom";

// import local components
import { Footer, Navigation, Settings } from "../components";

const AppLayout = () => {
  return (
    <div className="wrapper">
      <Navigation className="nav" />
      <Outlet />
      <Settings className="main-settings" />
      <Footer className="main-footer" />
    </div>
  );
};

export default AppLayout;
