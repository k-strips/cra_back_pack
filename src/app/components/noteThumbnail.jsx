import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from ".";

const NoteThumbnail = ({ note }) => {
  const navigate = useNavigate();

  return (
    <div className="note--thumbnail">
      <h5 className="note--thumbnail__title">{note.title}</h5>
      <div className="note--thumbnail__footer">
        <time datetime={`${note.createdAt}`}>{note.createdAt}</time>
        <Button
          onClick={() => {
            navigate(`${note.id}`);
          }}
        >
          open
        </Button>
      </div>
    </div>
  );
};

export default NoteThumbnail;
