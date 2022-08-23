import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleTyping(event) {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setNote((x) => {
      return {
        ...x,
        [name]: value,
      };
    });
  }

  function onAdd(event) {
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          autoComplete="off"
          onChange={handleTyping}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          value={note.content}
          onChange={handleTyping}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />

        <Zoom in={true}>
          <Fab onClick={onAdd}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
