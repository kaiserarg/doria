import React from "react";
import "../index.css";

const CreateUser = () => {
    //write fetch codes here

    return(
        <div className="grid-cols-1 w-5/12 h-64 bg-secondary rounded-3xl border-4 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0)] ">
            <div className='text-black text-2xl font-rubik font-semibold'>
                NICKNAME
            </div>
            <form onSubmit={""}>
                <input 
                    type="text" 
                    placeholder="YOUR COOL NICKNAME" 
                    //value={username}
                    //onChange={e => setUsername(e.target.value)}
                    className="w-10/12 h-12 px-3 py-2 no-animation text-2xl text-black font-rubik font-semibold placeholder-gray-400  bg-white rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0)]"
                />
                <div>
                    <button className="bg-primary w-5/12 h-14 text-2xl font-rubik font-semibold text-white rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0)]">Join Game</button>
                </div>
            </form>
        </div>
    );
}

export default CreateUser;