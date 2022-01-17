import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from ".";

const NoteThumbnail = ({ note }) => {
  const navigate = useNavigate();

  const backgroundImages = [{ 1: "will-turner-GTPT_fNFQiE-unsplash.jpg" }];
  return (
    <Card
      className="thumbnail thumbnail--note"
      onClick={() => {
        navigate(`${note.id}`);
      }}
    >
      <h5 className="thumbnail--title">{note.title}</h5>
    </Card>
  );
};

export default NoteThumbnail;
