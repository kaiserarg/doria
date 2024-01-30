import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Lobby() {
  const [roomId, setRoomId] = useState('');
  const [isInLobby, setIsInLobby] = useState(false);
  const [games, setGames] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const createRoom = async () => {
    try {
      const response = await fetch('http://localhost:3000/game/create-session', {
        method: 'POST'
      });
      const data = await response.json();
      if (data && data.id) {
        setIsInLobby(true);
        navigate(`/game/${data.id}`);
      }
    } catch (error) {
      console.error('Error creating game session:', error);
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/game/available-games')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  const joinRoom = async () => {
    try {
      const response = await fetch(`http://localhost:3000/game/join-session/${roomId}`);
      if (response.ok) {
        setIsInLobby(true);
        navigate(`/game/${roomId}`);
      } else {
        setError('Room not found');
      }
    } catch (error) {
      setError('Error joining room');
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <h2>Game Lobby</h2>
      {!isInLobby && (
        <>
            <button onClick={createRoom}>Create Room</button>
            <input
                type="text"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                placeholder="Enter Room ID"
            />
            <button onClick={joinRoom}>Join Room</button>
            {error && <p>Error: {error}</p>}
        </>
       )}
       {isInLobby && (
        <>
          <h3>Select a Game</h3>
          <ul>
            {games.map(game => (
              <li key={game} onClick={() => selectGame(game)}>{game}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Lobby;