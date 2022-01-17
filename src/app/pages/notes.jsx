import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// gql graphql related imports
import { useQuery } from "@apollo/client";
import { LIST_NOTES } from "../graphql/query";

// local components imports
import { NoteThumbnail } from "../components";

let notesData = [
  {
    id: 1,
    title: "the story of love that ended in chaos",
    createdAt: "12-12-2021",
    content:
      "this is all I have. I hope to finish this soon so I can build other things.",
  },
  { id: 2, title: "my second note", createdAt: "12-12-2021" },
  { id: 3, title: "my third note", createdAt: "12-12-2021" },
  { id: 4, title: "some notes", createdAt: "12-12-2021" },
  { id: 5, title: "more notes", createdAt: "12-12-2021" },
  { id: 6, title: "last note", createdAt: "12-12-2021" },
];

const Notes = () => {
  // const {
  //   data: notesData,
  //   loading: LoadingNotes,
  //   error: NotesError,
  // } = useQuery(LIST_NOTES);

  // console.log(notesData?.listNotes);
  const [notes, setNotes] = useState(notesData);
  return (
    <div className="notes-content">
      {notes?.map((n, i) => (
        <NoteThumbnail note={n} key={i} />
      ))}
    </div>
  );
};

export default Notes;
