import React, { useState } from "react";
import { AppLayout } from "../layout";

// local components imports
import { NoteThumbnail } from "../components";

let notesData = [
  { title: "my first note", body: "my first" },
  { title: "my second note", body: "my second" },
  { title: "my third note", body: "my third" },
];

const Notes = () => {
  const [notes, setNotes] = useState(notesData);
  return (
    <AppLayout>
      <div className="page">
        {notes?.map((n, i) => (
          <NoteThumbnail note={n} key={i} />
        ))}
      </div>
    </AppLayout>
  );
};

export default Notes;
