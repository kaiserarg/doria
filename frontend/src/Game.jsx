import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Game() {
const [games, setGames] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/game/available-games')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  return (
    <div>
        Game session: {id}
        <h3>Select a Game</h3>
        <ul>
            {games.map(game => (
              <li key={game} onClick={() => selectGame(game)}>{game}</li>
            ))}
        </ul>
    </div>
  );
}

export default Game;
