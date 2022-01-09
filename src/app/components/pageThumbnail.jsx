import React from "react";
import { useNavigate } from "react-router-dom";

// local components import
import { Button } from ".";

const PageThumbnail = ({ page }) => {
  const navigate = useNavigate();
  return (
    <div className="page--thumbnail">
      <h5 className="page--title">{page.title}</h5>
      <p className="page--content">{page.content}</p>
      <div className="page--footer">
        <time datetime={`${page.createdAt}`}>{page.createdAt}</time>
        <Button onClick={() => navigate(`${page.id}`)}>open</Button>
      </div>
    </div>
  );
};

export default PageThumbnail;
