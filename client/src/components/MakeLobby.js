import React, { useState } from 'react';

const MakeLobby = ({ setIsLobbyActive, setCurrentLobbyCode }) => {
    const [lobbyCode, setLobbyCode] = useState("");

    const handleJoin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/lobbies/${lobbyCode}`);
            if (response.status === 200) {
                console.log("Successfully joined lobby!");
                setCurrentLobbyCode(lobbyCode);
                setIsLobbyActive(false);  // hide lobby and show CreateUser
            } else {
                console.log("Failed to join lobby.");
            }
        } catch (error) {
            console.error(error);
            console.log("Failed to join lobby.");
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/lobbies/create', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await response.json();
            if (response.status === 200) {
                console.log(`Lobby created! Your lobby code is ${data.lobbyCode}`);
                setCurrentLobbyCode(data.lobbyCode);
                setIsLobbyActive(false);  // hide lobby and show CreateUser

            } else {
                console.log("Failed to create lobby.");
            }
        } catch (error) {
            console.error(error);
            console.log("Failed to create lobby.");
        }
    };

    return (
        <div className='flex flex-col justify-center items-center pt-24'>
            <div className="flex flex-col justify-center items-center w-2/5 h-auto bg-secondary rounded-3xl border-4 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0)] ">
                <div className='self-start pt-7 pb-3 pl-20 text-black text-2xl font-rubik font-semibold'>
                    ROOM CODE
                </div>
                <form onSubmit={handleJoin} className="flex flex-col justify-center items-center w-full">
                    <input 
                        type="text" 
                        maxLength="5"
                        placeholder="5 - LETTER CODE" 
                        value={lobbyCode}
                        onChange={e => setLobbyCode(e.target.value)}
                        className="justified-center w-10/12 h-14 px-3 py-2 no-animation text-2xl text-black font-rubik font-semibold placeholder-gray-400  bg-white rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0)]"
                    />
                    <div className="flex flex-col justify-center items-center w-2/5 h-auto">
                        <button className="btn bg-primary w-full h-16 my-10 px-10 text-2xl font-rubik font-semibold text-white rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0)] ">Join Game</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center w-2/5 h-auto">
                <button onClick={handleCreate} className="m-10 btn bg-white w-full h-14 text-primary rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_rgba(0,0,0)]">Create Game</button>
            </div>
        </div>
    );
};

export default MakeLobby;
