import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
function App(){

    /* add 'note' into a new array using state because needs to be change. at the begging is an empty array,
    it will be populated once the user start to create notes in createNote component*/
    const [notes, setNotes]=useState([])

    function addNote(note){
        console.log(note)
        // populate 'notes'
        setNotes(prevNotes =>{
            return [...prevNotes, note];
        })
    }

    return(
    <>
    <Header />
        <CreateNote 
            /*to pass the information from "note" in createNote in App and render it in Note. the transfere will 
            be by passing a function("addNote()") as props ("onAdd")*/
            onAdd={addNote}
        />
        <Note 
            title="Title"
            content="content"
        />
    
    <Footer />
    </>
    );
}
export default App;