import React from "react";

const NoteThumbnail = ({ note }) => {
  return (
    <div className="note-thumbnail">
      <hgroup>
        <h5>{note.title}</h5>
      </hgroup>
      <p>{note.updatedAt}</p>
    </div>
  );
};

export default NoteThumbnail;
