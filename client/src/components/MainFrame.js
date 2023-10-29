import React from "react";
import "../index.css";
import PlayerCard from "./PlayerCard";
import NavBar from "./NavBar";

const MainFrame = () => {
    return (
        <div>
            <div className="w-screen h-screen bg-teal-950 flex justify-center">
                <div className=" w-8/12 h-screen bg-gray-700">
                    <div className="flex justify-center items-center flex-wrap relative gap-24 pt-64">
                        <PlayerCard/>
                        <PlayerCard/>  
                        <PlayerCard/>  
                        <PlayerCard/>  
                        <NavBar/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFrame;