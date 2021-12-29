import React, { useState } from "react";

// local components import
import { PageThumbnail } from "../components";
import { AppLayout } from "../layout";

const pagesData = [
  { title: "first page", body: "first page" },
  { title: "second page", body: "second page" },
];

const Pages = () => {
  const [pages, setPages] = useState(pagesData);
  return (
    <AppLayout>
      <div className="page">
        {pages.map((p, i) => (
          <PageThumbnail page={p} key={i} />
        ))}
      </div>
    </AppLayout>
  );
};

export default Pages;
