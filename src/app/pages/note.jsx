import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PageThumbnail } from "../components";

const pagesData = [
  { id: 1, title: "", content: "", updatedAt: "" },
  { id: 2, title: "", content: "", updatedAt: "" },
  { id: 3, title: "", content: "", updatedAt: "" },
  { id: 4, title: "", content: "", updatedAt: "" },
  { id: 5, title: "", content: "", updatedAt: "" },
  { id: 6, title: "", content: "", updatedAt: "" },
];

const Note = () => {
  const [pages, setPages] = useState(pagesData);
  const params = useParams();
  return (
    <div className="note-content">
      {/* {pages?.map((p, i) => (
        <PageThumbnail key={i} page={p} />
      ))} */}
      note {params.noteId}
    </div>
  );
};

export default Note;
