import React, { useState } from "react";
import "../index.css";

const CreateUser = (props) => {
    const [username, setUsername] = useState("");
 
    const handleUsername = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/lobbies/${props.lobbyCode}/addUser`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username }),
            });
            if (response.status === 200) {
                console.log("Username created")
            } else {
                console.log('failed to create username');
            }
        } catch (error) {
            console.error(error);
            console.log("Fail to create username");
        }
    }

    return(
        <div className="flex flex-col justify-center items-center w-2/5 h-auto bg-secondary rounded-3xl border-4 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0)] ">
            <div className="m-10 w-52 h-52 text-2xl font-rubik font-semibold  bg-gray-100 text-white rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0)]">
            </div>
            <div className='self-start pt-3 pb-3 pl-20 text-black text-2xl font-rubik font-semibold'>
                NICKNAME
            </div>
            <form onSubmit={handleUsername} className="flex flex-col justify-center items-center w-full">
                <input 
                    type="text" 
                    placeholder="YOUR COOL NICKNAME" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="w-10/12 h-12 px-3 py-2 no-animation text-2xl text-black font-rubik font-semibold placeholder-gray-400  bg-white rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0)]"
                />
                <div>
                    <button className="btn bg-primary self-stretch h-14 my-10 px-10 text-2xl font-rubik font-semibold text-white rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0)]">Join Game</button>
                </div>
            </form>
        </div>
    );
}

export default CreateUser;