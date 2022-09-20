import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Note(props) {

  function handleClick(){
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton onClick={handleClick} aria-label="delete">
        <DeleteOutlineIcon />
      </IconButton>
    </div>
  );
}

export default Note;
