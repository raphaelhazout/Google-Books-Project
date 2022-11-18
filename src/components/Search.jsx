import React,{useState} from 'react';
import { Button } from '@mui/material';

const wishListItems = [];

function Search() {
    const [bookName, setBookName] = useState("");
    const [books,setBooks] = useState([]);

    const isEmpty = bookName.length > 0;


    function handleChange(event) {
        setBookName(event.target.value);
        handleChanges(event.target.value);
    }

    function handleChanges(name) {
        const getURL = `https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=20&key=AIzaSyB8eFIEmG40vme-tQFE4h6OtJe3pF6muSA`; 
        if(isEmpty){
        fetch(getURL)
        .then(res => res.json())
        .then((booksArray) => {
                   const searchList = booksArray.items.map((item) => {
                        return item.volumeInfo;
                   })
                   setBooks(searchList);
                }
            )
        }
    }

    function handleClick(event) {
        wishListItems.push(event.target.value);
    }


    return (
        <div>
      <header>
        <h1>Book Search:</h1>
      </header>
      <form className="create-note">
        {<input onChange={handleChange} value={bookName} placeholder="Enter Book Name." />}
      </form>
      {isEmpty && books.map((noteItem, index) => {
        return (
            <div className="note">
            <form>
                <h1>{noteItem.title}</h1>
                <p><i>Authors: </i>{noteItem.authors}</p>
                <Button variant="outlined" style={{marginTop:"10px"}} onClick={handleClick} value={noteItem.title}>Add to Wish List</Button>
            </form>
        </div>
        );
      })};
    </div>
    );
}

export {Search,wishListItems};