import React from "react";

const PageThumbnail = ({ className, page }) => {
  return (
    <div className={className}>
      <h2>{page.title}</h2>
      <p>{page.body}</p>
    </div>
  );
};

export default PageThumbnail;
