import React from "react";

const NoteThumbnail = ({ className, note }) => {
  return (
    <div className={className}>
      <h5>{note.title}</h5>
    </div>
  );
};

export default NoteThumbnail;
