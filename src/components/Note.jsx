import React from "react";

// Note component it will render the input from CreateNote component

function Note(props){
    
    function handleClick(){
        /* Once the user click in delete button it will trigger the props.onDelete()
         which is the deleteNote() in App component*/
        props.onDelete()
    }
    
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}
export default Note;