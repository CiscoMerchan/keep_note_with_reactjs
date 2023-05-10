import React from "react";

function Footer(){
    // to update the year automatically
    const year = new Date().getFullYear();
    return(
        <footer>
            <p>Copyrght ⓒ {year}</p>
        </footer>
    )
}
export default Footer;