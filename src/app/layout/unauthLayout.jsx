import React from "react";
import { Outlet } from "react-router-dom";

const UnauthLayout = () => {
  return (
    <div className="unauth-wrapper">
      <Outlet />
    </div>
  );
};

export default UnauthLayout;
