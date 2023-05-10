import React, { useState } from "react";
// CreateNote componet take as input the title and the content of the note
function CreateNote(){
    // to fetch the data from the inputs
    const [note, setNote]=useState({
        title:"",
        content:""
    })
    // to update the values in the input-areas
    function handleChange(event){
        /* distructor the event. to use those const as separate values and add it to note using
         setNote*/
        const{name, value} = event.target
        // setNote will recive the previous note and add the new note
        setNote(prevNote =>{
            return{
                /* return a new object using the spread operator and add the previous notes and
                add a new value into the note const depending on the key/value paire*/
                ...prevNote,
                // depends on the name will add the value in the note constructor
                [name]: value
                // this will  save the object in the State
            };
        });
    }
    
    return(
        <div>
            <form>
                <input 
                value={note.title}
                onChange={handleChange}
                name="title"
                placeholder="title"
                />
                <textarea 
                value={note.content}
                onChange={handleChange}
                name="content"
                placeholder="Take note ..."
                rows="3"
                />
                <button>Add</button>
            </form>
        </div>
    );
}
export default CreateNote;