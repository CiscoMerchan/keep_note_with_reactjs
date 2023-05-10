import React from "react";
// CreateNote componet take as input the title and the content of the note
function CreateNote(){
    return(
        <div>
            <form>
                <input 
                name="title"
                placeholder="title"
                />
                <textarea 
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