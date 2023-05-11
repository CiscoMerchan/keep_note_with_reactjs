import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
function App(){

    function addNote(note){
        console.log(note)
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