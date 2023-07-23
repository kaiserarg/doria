import React from "react";
import "../index.css"; 

const Navbar = () => {
    return(
    //create div for logo centered in middle of screen with padding on the top
    <div>
        <div className="absolute mt-10 text-6xl text-primary font-rubik font-bold -translate-y-1 translate-x-1">
            doria.app
        </div>
        <div className="absolute mt-10 text-6xl text-secondary font-rubik font-bold -translate-y-2 translate-x-2">
            doria.app
        </div>
        <div className="text-6xl mt-10 text-accent font-rubik font-bold">
            doria.app   
        </div>
    </div>

    
    )
}

export default Navbar;

