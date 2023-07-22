import React from "react";
import "../index.css"; 

const Navbar = () => {
    return(
    //create div for logo centered in middle of screen with padding on the top
    <div className="flex items-center justify-center pt-10 font-rubik text-5xl font-extrabold">
        <div className="absolute text-6xl text-primary font-bold -translate-y-1 translate-x-1">
            doria.app
        </div>
        <div className="absolute text-6xl text-secondary font-bold -translate-y-2 translate-x-2">
            doria.app
        </div>
        <div className="text-6xl text-accent font-bold">
            doria.app   
        </div>
    </div>

    
    )
}

export default Navbar;

