// frontend/src/AnagramArena.jsx
import React, { useState, useEffect } from 'react';

function AnagramArena({ gameId }) {
  const [players, setPlayers] = useState({});
  const [currentWord, setCurrentWord] = useState('');
  const [playerInput, setPlayerInput] = useState('');
  const [error, setError] = useState('');

  // Fetch game state from the server
  useEffect(() => {
    const fetchGameState = async () => {
      try {
        const response = await fetch(`http://localhost:3000/game/${gameId}/state`);
        const data = await response.json();
        setCurrentWord(data.currentWord);
        setPlayers(data.players);
      } catch (error) {
        console.error('Error fetching game state:', error);
      }
    };

    fetchGameState();
  }, [gameId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/game/${gameId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word: playerInput })
      });

      const data = await response.json();
      if (data.success) {
        setPlayers(data.players); // Update players' scores
        setPlayerInput(''); // Reset input field
      } else {
        setError(data.message); // Show error message from server
      }
    } catch (error) {
      console.error('Error submitting word:', error);
    }
  };

  return (
    <div>
      <h2>Anagram Arena</h2>
      <p>Current Word: {currentWord}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={playerInput}
          onChange={(e) => setPlayerInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>Error: {error}</p>}
      <h3>Scores:</h3>
      <ul>
        {Object.entries(players).map(([playerId, score]) => (
          <li key={playerId}>{playerId}: {score}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnagramArena;