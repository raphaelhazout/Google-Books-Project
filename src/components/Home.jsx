import React, { useState } from "react";

function Home(){
  const [userName,setUserName] = useState("");

  function handleChange(event) {
    setUserName(event.target.value);
  }


  function handleClick(e) {
    //e.preventDefault();
    if(userName.length>0) {
      alert("Welcome "+userName);
    }
  }

  return (
    <div>
      <header>
        <h1>Welcome</h1>
      </header>
      <form action="/search" className="create-note">
        {<input onChange={handleChange} value={userName} placeholder="Enter your username.." required/>}
        <button onClick={handleClick}>Enter</button>
      </form>
    </div>
  );}


export default Home;
