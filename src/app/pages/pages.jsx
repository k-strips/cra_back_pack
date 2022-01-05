import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// local components import
import { PageThumbnail } from "../components";

const pagesData = [
  { title: "first page", body: "first page" },
  { title: "second page", body: "second page" },
];

const Pages = () => {
  const [pages, setPages] = useState(pagesData);
  return (
    <div className="page">
      {pages.map((p, i) => (
        <PageThumbnail page={p} key={i} />
      ))}
      <Outlet />
    </div>
  );
};

export default Pages;
