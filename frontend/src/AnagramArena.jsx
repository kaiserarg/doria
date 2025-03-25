/**
 * AnagramArena Component
 *
 * This component displays a main anagram word and allows users to submit their own words
 * to earn points. It also shows a list of players and their scores.
 *
 * Props:
 *   @param {string} gameId - The unique identifier for the current game instance.
 *
 * State:
 *   - players (object): Contains each player's ID and score.
 *   - currentWord (string): The main word used for creating anagrams.
 *   - playerInput (string): Holds the user’s current guess.
 *   - error (string): Displays any error message from the server.
 */

import React, { useState, useEffect } from 'react';

function AnagramArena({ gameId }) {
  const [players, setPlayers] = useState({});
  const [currentWord, setCurrentWord] = useState('');
  const [playerInput, setPlayerInput] = useState('');
  const [error, setError] = useState('');

  // Fetch the current game state when the component mounts or when gameId changes
  useEffect(() => {
    const fetchGameState = async () => {
      try {
        const response = await fetch(`http://localhost:3000/game/${gameId}/state`);
        const data = await response.json();
        setCurrentWord(data.currentWord);
        setPlayers(data.players);
      } catch (err) {
        console.error('Error fetching game state:', err);
      }
    };
    fetchGameState();
  }, [gameId]);

  // Send the player's guess to the server
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
        setPlayers(data.players);
        setPlayerInput('');
        setError('');
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('Error submitting guess:', err);
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
