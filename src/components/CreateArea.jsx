import React, { useState } from "react";
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [isExpanded,setExpanded] = useState(false);

  const [note,setNote] = useState({
    title:"",
    content:""
  });
  
  function handleChange(event) {
    const {name,value} = event.target;

    setNote(prevNote => {
      return {
      ...prevNote,
      [name]: value
      };
    });
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({  title:"",
    content:""})
    event.preventDefault();
  }
  function handleClick(){
    setExpanded(true);
  }


  return (
    <div>
      <form className="create-note">
      {isExpanded && <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />}
        <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded?"3":"1"} value={note.content} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><MapsUgcRoundedIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
