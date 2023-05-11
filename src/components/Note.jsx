import React from "react";

// Note component it will render the input from CreateNote component

function Note(props){
    
    function handleClick(){}
    
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}
export default Note;