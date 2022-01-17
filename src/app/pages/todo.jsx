import React, { useRef } from "react";
import { Input } from "../components";

let todos = [
  { id: 1, content: "create at least 4 apps and apply", createdAt: "" },
  { id: 2, content: "build 3 solid backend stack", createdAt: "" },
  { id: 3, content: "3 node apis", createdAt: "" },
  { id: 4, content: "2 flask apis one rest one graphql", createdAt: "" },
  { id: 5, content: "3 front end apps", createdAt: "" },
  {
    id: 6,
    content: "apply like crazy, this should be before the month ends",
    createdAt: "",
  },
];

const Todo = () => {
  // const inputRef = useRef([]);
  return (
    <div className="todos-content">
      {todos.map((t, i) => (
        <div key={i} className="thumbnail thumbnail--todo">
          <Input type="checkbox" />
          {t.content}
        </div>
      ))}
    </div>
  );
};

export default Todo;
