import React, { useState } from 'react';

const LobbyComponent = () => {
    const [lobbyCode, setLobbyCode] = useState("");
    const [message, setMessage] = useState("");

    const handleJoin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/lobbies/${lobbyCode}`);
            if (response.status === 200) {
                setMessage("Successfully joined lobby!");
            } else {
                setMessage("Failed to join lobby.");
            }
        } catch (error) {
            console.error(error);
            setMessage("Failed to join lobby.");
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/lobbies/create', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: 'your username' }) // replace 'your username' with the actual username
            });

            const data = await response.json();
            if (response.status === 200) {
                setMessage(`Lobby created! Your lobby code is ${data.lobbyCode}`);
            } else {
                setMessage("Failed to create lobby.");
            }
        } catch (error) {
            console.error(error);
            setMessage("Failed to create lobby.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleJoin} className="w-80 space-y-4">
                <p className="text-2xl font-bold text-center text-white">Join a Lobby</p>
                <input 
                    type="text" 
                    placeholder="Enter lobby code" 
                    value={lobbyCode}
                    onChange={e => setLobbyCode(e.target.value)}
                    className="w-full px-3 py-2 text-black placeholder-gray-500 bg-white rounded"
                />
                <button className="w-full px-3 py-2 text-white bg-purple-500 rounded hover:bg-purple-600">
                    Join Lobby
                </button>
            </form>
            <form onSubmit={handleCreate} className="w-80 space-y-4">
                <p className="text-2xl font-bold text-center text-white">Create a Lobby</p>
                <button className="w-full px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Create Lobby
                </button>
            </form>
            {message && <p className="text-white">{message}</p>}
        </div>
    );
};

export default LobbyComponent;
