import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function onDelete() {
    props.onDelete(props.index);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={onDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
