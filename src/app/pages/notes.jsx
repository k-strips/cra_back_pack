import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// gql graphql related imports
import { useQuery } from "@apollo/client";
import { LIST_NOTES } from "../graphql/query";

// local components imports
import { NoteThumbnail } from "../components";

let notesData = [
  { title: "my first note", body: "my first" },
  { title: "my second note", body: "my second" },
  { title: "my third note", body: "my third" },
];

const Notes = () => {
  const { data: notesData, loading, error } = useQuery(LIST_NOTES);

  console.log(notesData?.listNotes);
  const [notes, setNotes] = useState(notesData);
  return (
    <div className="main-content">
      {notes?.map((n, i) => (
        <NoteThumbnail note={n} key={i} />
      ))}
      <Outlet />
    </div>
  );
};

export default Notes;
