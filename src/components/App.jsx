import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
function App(){
    return(
    <>
    <Header />
        <CreateNote />
        <Note 
            title="Title"
            content="content"
        />
    
    <Footer />
    </>
    );
}
export default App;